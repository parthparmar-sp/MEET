import React, { useEffect, useRef, useState } from 'react'
import io from "socket.io-client";
import { Badge, IconButton, TextField, Avatar, Box, Modal, Typography, Button as MuiButton } from '@mui/material';
import { Button } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import styles from "../styles/videoComponent.module.css";
import CallEndIcon from '@mui/icons-material/CallEnd'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'
import ChatIcon from '@mui/icons-material/Chat'
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import server from '../environment';

const server_url = server;

var connections = {};

const peerConfigConnections = {
    "iceServers": [
        { "urls": "stun:stun.l.google.com:19302" }
    ]
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: 'none'
};

export default function VideoMeetComponent() {
    var socketRef = useRef();
    let socketIdRef = useRef();
    let localVideoref = useRef();
    let [videoAvailable, setVideoAvailable] = useState(true);
    let [audioAvailable, setAudioAvailable] = useState(true);
    let [video, setVideo] = useState([]);
    let [audio, setAudio] = useState();
    let [screen, setScreen] = useState();
    let [showModal, setModal] = useState(false);
    let [screenAvailable, setScreenAvailable] = useState();
    let [messages, setMessages] = useState([])
    let [message, setMessage] = useState("");
    let [newMessages, setNewMessages] = useState(0);
    let [askForUsername, setAskForUsername] = useState(true);
    let [username, setUsername] = useState("");
    const videoRef = useRef([])
    let [videos, setVideos] = useState([])

    useEffect(() => {
        console.log("HELLO")
        getPermissions();
    }, [])

    let getDislayMedia = () => {
        if (screen) {
            if (navigator.mediaDevices.getDisplayMedia) {
                navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
                    .then(getDislayMediaSuccess)
                    .then((stream) => { })
                    .catch((e) => console.log(e))
            }
        }
    }

    const getPermissions = async () => {
        try {
            const videoPermission = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoPermission) {
                setVideoAvailable(true);
                console.log('Video permission granted');
            } else {
                setVideoAvailable(false);
                console.log('Video permission denied');
            }

            const audioPermission = await navigator.mediaDevices.getUserMedia({ audio: true });
            if (audioPermission) {
                setAudioAvailable(true);
                console.log('Audio permission granted');
            } else {
                setAudioAvailable(false);
                console.log('Audio permission denied');
            }

            if (navigator.mediaDevices.getDisplayMedia) {
                setScreenAvailable(true);
            } else {
                setScreenAvailable(false);
            }

            if (videoAvailable || audioAvailable) {
                const userMediaStream = await navigator.mediaDevices.getUserMedia({ video: videoAvailable, audio: audioAvailable });
                if (userMediaStream) {
                    window.localStream = userMediaStream;
                    if (localVideoref.current) {
                        localVideoref.current.srcObject = userMediaStream;
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (video !== undefined && audio !== undefined) {
            getUserMedia();
            console.log("SET STATE HAS ", video, audio);
        }
    }, [video, audio])

    let getMedia = () => {
        setVideo(videoAvailable);
        setAudio(audioAvailable);
        connectToSocketServer();
    }

    let getUserMediaSuccess = (stream) => {
        try {
            window.localStream.getTracks().forEach(track => track.stop())
        } catch (e) { console.log(e) }

        window.localStream = stream
        localVideoref.current.srcObject = stream

        for (let id in connections) {
            if (id === socketIdRef.current) continue

            connections[id].addStream(window.localStream)

            connections[id].createOffer().then((description) => {
                console.log(description)
                connections[id].setLocalDescription(description)
                    .then(() => {
                        socketRef.current.emit('signal', id, JSON.stringify({ 'sdp': connections[id].localDescription }))
                    })
                    .catch(e => console.log(e))
            })
        }

        stream.getTracks().forEach(track => track.onended = () => {
            setVideo(false);
            setAudio(false);

            try {
                let tracks = localVideoref.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            } catch (e) { console.log(e) }

            let blackSilence = (...args) => new MediaStream([black(...args), silence()])
            window.localStream = blackSilence()
            localVideoref.current.srcObject = window.localStream

            for (let id in connections) {
                connections[id].addStream(window.localStream)

                connections[id].createOffer().then((description) => {
                    connections[id].setLocalDescription(description)
                        .then(() => {
                            socketRef.current.emit('signal', id, JSON.stringify({ 'sdp': connections[id].localDescription }))
                        })
                        .catch(e => console.log(e))
                })
            }
        })
    }

    let getUserMedia = () => {
        if ((video && videoAvailable) || (audio && audioAvailable)) {
            navigator.mediaDevices.getUserMedia({ video: video, audio: audio })
                .then(getUserMediaSuccess)
                .then((stream) => { })
                .catch((e) => console.log(e))
        } else {
            try {
                let tracks = localVideoref.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            } catch (e) { }
        }
    }

    let getDislayMediaSuccess = (stream) => {
        console.log("HERE")
        try {
            window.localStream.getTracks().forEach(track => track.stop())
        } catch (e) { console.log(e) }

        window.localStream = stream
        localVideoref.current.srcObject = stream

        for (let id in connections) {
            if (id === socketIdRef.current) continue

            connections[id].addStream(window.localStream)

            connections[id].createOffer().then((description) => {
                connections[id].setLocalDescription(description)
                    .then(() => {
                        socketRef.current.emit('signal', id, JSON.stringify({ 'sdp': connections[id].localDescription }))
                    })
                    .catch(e => console.log(e))
            })
        }

        stream.getTracks().forEach(track => track.onended = () => {
            setScreen(false)

            try {
                let tracks = localVideoref.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            } catch (e) { console.log(e) }

            let blackSilence = (...args) => new MediaStream([black(...args), silence()])
            window.localStream = blackSilence()
            localVideoref.current.srcObject = window.localStream

            getUserMedia()
        })
    }

    let gotMessageFromServer = (fromId, message) => {
        var signal = JSON.parse(message)

        if (fromId !== socketIdRef.current) {
            if (signal.sdp) {
                connections[fromId].setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(() => {
                    if (signal.sdp.type === 'offer') {
                        connections[fromId].createAnswer().then((description) => {
                            connections[fromId].setLocalDescription(description).then(() => {
                                socketRef.current.emit('signal', fromId, JSON.stringify({ 'sdp': connections[fromId].localDescription }))
                            }).catch(e => console.log(e))
                        }).catch(e => console.log(e))
                    }
                }).catch(e => console.log(e))
            }

            if (signal.ice) {
                connections[fromId].addIceCandidate(new RTCIceCandidate(signal.ice)).catch(e => console.log(e))
            }
        }
    }

    let connectToSocketServer = () => {
        socketRef.current = io.connect(server_url, { secure: false })

        socketRef.current.on('signal', gotMessageFromServer)

        socketRef.current.on('connect', () => {
            socketRef.current.emit('join-call', window.location.href)
            socketIdRef.current = socketRef.current.id

            socketRef.current.on('chat-message', addMessage)

            socketRef.current.on('user-left', (id) => {
                setVideos((videos) => videos.filter((video) => video.socketId !== id))
            })

            socketRef.current.on('user-joined', (id, clients) => {
                clients.forEach((socketListId) => {
                    connections[socketListId] = new RTCPeerConnection(peerConfigConnections)
                    
                    connections[socketListId].onicecandidate = function (event) {
                        if (event.candidate != null) {
                            socketRef.current.emit('signal', socketListId, JSON.stringify({ 'ice': event.candidate }))
                        }
                    }

                    connections[socketListId].onaddstream = (event) => {
                        let videoExists = videoRef.current.find(video => video.socketId === socketListId);

                        if (videoExists) {
                            setVideos(videos => {
                                const updatedVideos = videos.map(video =>
                                    video.socketId === socketListId ? { ...video, stream: event.stream } : video
                                );
                                videoRef.current = updatedVideos;
                                return updatedVideos;
                            });
                        } else {
                            let newVideo = {
                                socketId: socketListId,
                                stream: event.stream,
                                autoplay: true,
                                playsinline: true
                            };

                            setVideos(videos => {
                                const updatedVideos = [...videos, newVideo];
                                videoRef.current = updatedVideos;
                                return updatedVideos;
                            });
                        }
                    };

                    if (window.localStream !== undefined && window.localStream !== null) {
                        connections[socketListId].addStream(window.localStream)
                    } else {
                        let blackSilence = (...args) => new MediaStream([black(...args), silence()])
                        window.localStream = blackSilence()
                        connections[socketListId].addStream(window.localStream)
                    }
                })

                if (id === socketIdRef.current) {
                    for (let id2 in connections) {
                        if (id2 === socketIdRef.current) continue

                        try {
                            connections[id2].addStream(window.localStream)
                        } catch (e) { }

                        connections[id2].createOffer().then((description) => {
                            connections[id2].setLocalDescription(description)
                                .then(() => {
                                    socketRef.current.emit('signal', id2, JSON.stringify({ 'sdp': connections[id2].localDescription }))
                                })
                                .catch(e => console.log(e))
                        })
                    }
                }
            })
        })
    }

    let silence = () => {
        let ctx = new AudioContext()
        let oscillator = ctx.createOscillator()
        let dst = oscillator.connect(ctx.createMediaStreamDestination())
        oscillator.start()
        ctx.resume()
        return Object.assign(dst.stream.getAudioTracks()[0], { enabled: false })
    }
    
    let black = ({ width = 640, height = 480 } = {}) => {
        let canvas = Object.assign(document.createElement("canvas"), { width, height })
        canvas.getContext('2d').fillRect(0, 0, width, height)
        let stream = canvas.captureStream()
        return Object.assign(stream.getVideoTracks()[0], { enabled: false })
    }

    let handleVideo = () => {
        setVideo(!video);
    }
    
    let handleAudio = () => {
        setAudio(!audio)
    }

    useEffect(() => {
        if (screen !== undefined) {
            getDislayMedia();
        }
    }, [screen])
    
    let handleScreen = () => {
        setScreen(!screen);
    }

    let handleEndCall = () => {
        try {
            let tracks = localVideoref.current.srcObject.getTracks()
            tracks.forEach(track => track.stop())
        } catch (e) { }
        window.location.href = "/"
    }

    const addMessage = (data, sender, socketIdSender) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: sender, data: data, time: new Date().toLocaleTimeString() }
        ]);
        if (socketIdSender !== socketIdRef.current && !showModal) {
            setNewMessages((prevNewMessages) => prevNewMessages + 1);
        }
    };

    let sendMessage = () => {
        if (message.trim() === '') return;
        socketRef.current.emit('chat-message', message, username)
        setMessage("");
    }

    let handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }
    
    let connect = () => {
        if (username.trim() === '') return;
        setAskForUsername(false);
        getMedia();
    }

    return (
        <div className={styles.container}>
            {askForUsername ? (
                <Modal open={askForUsername} onClose={() => {}}>
                    <Box sx={modalStyle}>
                        <Typography variant="h5" gutterBottom align="center">
                            Join Video Meeting
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                            <TextField 
                                fullWidth
                                label="Your Name" 
                                value={username} 
                                onChange={e => setUsername(e.target.value)}
                                variant="outlined"
                                onKeyPress={(e) => e.key === 'Enter' && connect()}
                            />
                            <Button 
                                variant="contained" 
                                onClick={connect}
                                size="large"
                                fullWidth
                                disabled={!username.trim()}
                                sx={{ mt: 2 }}
                            >
                                Join Meeting
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            ) : (
                <div className={styles.meetContainer}>
                    {/* Main Video Area */}
                    <div className={styles.videoArea}>
                        {/* Remote Videos */}
                        <div className={styles.remoteVideos}>
                            {videos.length > 0 ? (
                                videos.map((video) => (
                                    <div key={video.socketId} className={styles.remoteVideoContainer}>
                                        <video
                                            className={styles.remoteVideo}
                                            data-socket={video.socketId}
                                            ref={ref => {
                                                if (ref && video.stream) {
                                                    ref.srcObject = video.stream;
                                                }
                                            }}
                                            autoPlay
                                            playsInline
                                        />
                                        <div className={styles.videoLabel}>
                                            <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main' }}>
                                                <PersonIcon fontSize="small" />
                                            </Avatar>
                                            <span>Participant</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={styles.noParticipants}>
                                    <Typography variant="h6" color="textSecondary">
                                        Waiting for others to join...
                                    </Typography>
                                </div>
                            )}
                        </div>

                        {/* Local Video */}
                        <div className={styles.localVideoContainer}>
                            <video 
                                className={styles.localVideo}
                                ref={localVideoref} 
                                autoPlay 
                                muted
                                playsInline
                            />
                            <div className={styles.videoLabel}>
                                <Avatar sx={{ width: 24, height: 24, bgcolor: 'secondary.main' }}>
                                    <PersonIcon fontSize="small" />
                                </Avatar>
                                <span>You ({username})</span>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className={styles.controls}>
                        <IconButton 
                            onClick={handleVideo} 
                            className={`${styles.controlButton} ${!video ? styles.controlButtonOff : ''}`}
                            size="large"
                        >
                            {video ? <VideocamIcon /> : <VideocamOffIcon />}
                            <span className={styles.tooltip}>{video ? 'Turn off camera' : 'Turn on camera'}</span>
                        </IconButton>
                        
                        <IconButton 
                            onClick={handleAudio} 
                            className={`${styles.controlButton} ${!audio ? styles.controlButtonOff : ''}`}
                            size="large"
                        >
                            {audio ? <MicIcon /> : <MicOffIcon />}
                            <span className={styles.tooltip}>{audio ? 'Mute' : 'Unmute'}</span>
                        </IconButton>

                        {screenAvailable && (
                            <IconButton 
                                onClick={handleScreen} 
                                className={`${styles.controlButton} ${screen ? styles.controlButtonActive : ''}`}
                                size="large"
                            >
                                {screen ? <StopScreenShareIcon /> : <ScreenShareIcon />}
                                <span className={styles.tooltip}>{screen ? 'Stop sharing' : 'Share screen'}</span>
                            </IconButton>
                        )}

                        <Badge badgeContent={newMessages} color="error" overlap="circular">
                            <IconButton 
                                onClick={() => {
                                    setModal(!showModal);
                                    if (showModal) setNewMessages(0);
                                }} 
                                className={`${styles.controlButton} ${showModal ? styles.controlButtonActive : ''}`}
                                size="large"
                            >
                                <ChatIcon />
                                <span className={styles.tooltip}>Chat</span>
                            </IconButton>
                        </Badge>

                        <IconButton 
                            onClick={handleEndCall} 
                            className={styles.endCallButton}
                            size="large"
                        >
                            <CallEndIcon />
                            <span className={styles.tooltip}>End call</span>
                        </IconButton>
                    </div>

                    {/* Chat Modal */}
                    <Modal 
                        open={showModal} 
                        onClose={() => setModal(false)}
                        BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.1)' } }}
                    >
                        <div className={styles.chatModal}>
                            <div className={styles.chatHeader}>
                                <Typography variant="h6">Meeting Chat</Typography>
                                <IconButton onClick={() => setModal(false)} size="small">
                                    <CloseIcon />
                                </IconButton>
                            </div>
                            
                            <div className={styles.chatMessages}>
                                {messages.length > 0 ? (
                                    messages.map((item, index) => (
                                        <div 
                                            key={index} 
                                            className={`${styles.message} ${item.sender === username ? styles.myMessage : ''}`}
                                        >
                                            <div className={styles.messageHeader}>
                                                <strong>{item.sender}</strong>
                                                <span className={styles.messageTime}>{item.time}</span>
                                            </div>
                                            <div className={styles.messageContent}>{item.data}</div>
                                        </div>
                                    ))
                                ) : (
                                    <div className={styles.noMessages}>
                                        <Typography variant="body2" color="textSecondary">
                                            No messages yet. Say hello!
                                        </Typography>
                                    </div>
                                )}
                            </div>
                            
                            <div className={styles.chatInput}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Type a message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    size="small"
                                />
                                <IconButton 
                                    onClick={sendMessage} 
                                    color="primary"
                                    disabled={!message.trim()}
                                >
                                    <SendIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Modal>
                </div>
            )}
        </div>
    )
}