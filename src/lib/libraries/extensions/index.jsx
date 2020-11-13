import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import cubroidIconURL from './cubroid/cubroid.png';
import cubroidPeripheralIconURL from './cubroid/cubroid_svg.svg';
import cubroidMenuIconURL from './cubroid/cube48.svg';

import cubroidDcmotor01BgURL from './cubroid_dc_motor_1/cubroid_dcmotor_1_bg.png';
import cubroidDcmotor01IconURL from './cubroid_dc_motor_1/cubroid_dcmotor_1_icon.svg';

import cubroidDcmotor02BgURL from './cubroid_dc_motor_2/cubroid_dcmotor_2_bg.png';
import cubroidDcmotor02IconURL from './cubroid_dc_motor_2/cubroid_dcmotor_2_icon.svg';

import cubroidLedBgURL from './cubroid_led/cubroid_led_bg.png';
import cubroidLedIconURL from './cubroid_led/cubroid_led_icon.svg';

import cubroidLighttouchBgURL from './cubroid_lighttouch/cubroid_lighttouch_bg.png';
import cubroidLighttouchIconURL from './cubroid_lighttouch/cubroid_lighttouch_icon.svg';

import cubroidMasterBgURL from './cubroid_master/cubroid_master_bg.png';
import cubroidMasterIconURL from './cubroid_master/cubroid_master_icon.svg';

import cubroidProximityBgURL from './cubroid_proximity/cubroid_proximity_bg.png';
import cubroidProximityIconURL from './cubroid_proximity/cubroid_proximity_icon.svg';

import cubroidSoundBgURL from './cubroid_sound/cubroid_sound_bg.png';
import cubroidSoundIconURL from './cubroid_sound/cubroid_sound_icon.svg';

import tm2scratchBgURL from './tm2scratch/cubroid_teachable_machine.png';
import tm2scratchIconURL from './tm2scratch/cubroid_teachable_machine_s.svg';

import ml2scratchBgURL from './ml2scratch/cubroid_machine_learning.png';
import ml2scratchIconURL from './ml2scratch/cubroid_machine_learning_s.svg';

import posenet2scratchBgURL from './posenet2scratch/cubroid_pose_net.png';
import posenet2scratchIconURL from './posenet2scratch/cubroid_pose_net_s.svg';

import facemesh2scratchBgURL from './facemesh2scratch/cubroid_face_tracking.png';
import facemesh2scratchIconURL from './facemesh2scratch/cubroid_face_tracking_s.svg';

import handpose2scratchBgURL from './handpose2scratch/cubroid_hand_pose.png';
import handpose2scratchIconURL from './handpose2scratch/cubroid_hand_pose_s.svg';

import qrcode2scratchBgURL from './qrcode/cubroid_QR.png';
import qrcode2scratchIconURL from './qrcode/cubroid_QR_s.svg';

import speech2scratchBgURL from './speech2scratch/cubroid_speech_recognition.png';
import speech2scratchIconURL from './speech2scratch/cubroid_speech_recognition_s.svg';

import ic2scratchBgURL from './ic2scratch/cubroid_image_classification.png';
import ic2scratchIconURL from './ic2scratch/cubroid_image_classification_s.svg';

import iftttwebhooks2scratchBgURL from './iftttwebhooks/cubroid_IFTTT_webhooks.png';
import iftttwebhooks2scratchIconURL from './iftttwebhooks/cubroid_IFTTT_webhooks_s.svg';

import tmpose2scratchBgURL from './tmpose2scratch/cubroid_tm_pose.png';
import tmpose2scratchIconURL from './tmpose2scratch/cubroid_tm_pose_s.svg';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="DC 모터 1번 블록"
                description="DC 모터 1번 블록"
                id="gui.extension.cubroiddcmotor01.name"
            />
        ),
        extensionId: 'cubroiddcmotor01',
        collaborator: 'Cubroid',
        iconURL: cubroidDcmotor01BgURL,
        insetIconURL: cubroidDcmotor01IconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play with DC motor 1 blocks!"
                description="Cubroid DC motor 1 blocks. very nice!"
                id="gui.extension.cubroiddcmotor01.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: cubroidDcmotor01IconURL,
        connectionSmallIconURL: cubroidDcmotor01IconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid DC motor 1 blocks."
                id="gui.extension.cubroiddcmotor01.connectingMessage"
            />
        ),
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Cubroid dc motor blocks 2"
                description="Cubroid dc motor blocks 2"
                id="gui.extension.cubroiddcmotor02.name"
            />
        ),
        extensionId: 'cubroiddcmotor02',
        collaborator: 'Cubroid',
        iconURL: cubroidDcmotor02BgURL,
        insetIconURL: cubroidDcmotor02IconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play with DC motor 2 blocks!"
                description="Cubroid DC motor 2 blocks. very nice!"
                id="gui.extension.cubroiddcmotor02.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: cubroidDcmotor02IconURL,
        connectionSmallIconURL: cubroidDcmotor02IconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid DC motor 2 blocks."
                id="gui.extension.cubroiddcmotor02.connectingMessage"
            />
        ),
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Cubroid LED"
                description="Cubroid LED"
                id="gui.extension.cubroidled.name"
            />
        ),
        extensionId: 'cubroidled',
        collaborator: 'Cubroid',
        iconURL: cubroidLedBgURL,
        insetIconURL: cubroidLedIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid LED blocks. very nice!"
                id="gui.extension.cubroidled.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: cubroidPeripheralIconURL,
        connectionSmallIconURL: cubroidMenuIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid LED blocks."
                id="gui.extension.cubroidled.connectingMessage"
            />
        ),
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Cubroid light touch senser"
                description="Cubroid light touch senser"
                id="gui.extension.cubroidlighttouch.name"
            />
        ),
        extensionId: 'cubroidlighttouch',
        collaborator: 'Cubroid',
        iconURL: cubroidLighttouchBgURL,
        insetIconURL: cubroidLighttouchIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play with Proximity sensor blocks!"
                description="Cubroid Proximity sensor blocks. very nice!"
                id="gui.extension.cubroidlighttouch.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: cubroidLighttouchIconURL,
        connectionSmallIconURL: cubroidLighttouchIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid Proximity sensor blocks."
                id="gui.extension.cubroidlighttouch.connectingMessage"
            />
        ),
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Cubroid Master"
                description="Cubroid Master"
                id="gui.extension.cubroidmaster.name"
            />
        ),
        extensionId: 'cubroidmaster',
        collaborator: 'Cubroid',
        iconURL: cubroidMasterBgURL,
        insetIconURL: cubroidMasterIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid Master blocks. very nice!"
                id="gui.extension.cubroidmaster.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: cubroidMasterIconURL,
        connectionSmallIconURL: cubroidMasterIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid Master blocks."
                id="gui.extension.cubroidmaster.connectingMessage"
            />
        ),
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Cubroid proximity senser"
                description="Cubroid proximity senser"
                id="gui.extension.cubroidproximity.name"
            />
        ),
        extensionId: 'cubroidproximity',
        collaborator: 'Cubroid',
        iconURL: cubroidProximityBgURL,
        insetIconURL: cubroidProximityIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play with Proximity sensor blocks!"
                description="Cubroid Proximity sensor blocks. very nice!"
                id="gui.extension.cubroidproximity.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: cubroidProximityIconURL,
        connectionSmallIconURL: cubroidProximityIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid Proximity sensor blocks."
                id="gui.extension.cubroidproximity.connectingMessage"
            />
        ),
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Cubroid Sound block"
                description="Cubroid Sound block"
                id="gui.extension.cubroidsound.name"
            />
        ),
        extensionId: 'cubroidsound',
        collaborator: 'Cubroid',
        iconURL: cubroidSoundBgURL,
        insetIconURL: cubroidSoundIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid sound blocks. very nice!"
                id="gui.extension.cubroidsound.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: cubroidSoundIconURL,
        connectionSmallIconURL: cubroidSoundIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Cubroid sound blocks."
                id="gui.extension.cubroidsound.connectingMessage"
            />
        ),
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'TM2Scratch',
        extensionId: 'tm2scratch',
        collaborator: 'Cubroid',
        iconURL: tm2scratchBgURL,
        insetIconURL: tm2scratchIconURL,
        description: 'tm2 scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: tm2scratchIconURL,
        connectionSmallIconURL: tm2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'ML2Scratch',
        extensionId: 'ml2scratch',
        collaborator: 'Cubroid',
        iconURL: ml2scratchBgURL,
        insetIconURL: ml2scratchIconURL,
        description: 'ml2 scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: ml2scratchIconURL,
        connectionSmallIconURL: ml2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'Posenet2Scratch',
        extensionId: 'posenet2scratch',
        collaborator: 'Cubroid',
        iconURL: posenet2scratchBgURL,
        insetIconURL: posenet2scratchIconURL,
        description: 'posenet2 scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: posenet2scratchIconURL,
        connectionSmallIconURL: posenet2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'Facemesh2Scratch',
        extensionId: 'facemesh2scratch',
        collaborator: 'Cubroid',
        iconURL: facemesh2scratchBgURL,
        insetIconURL: facemesh2scratchIconURL,
        description: 'face mesh 2 scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: facemesh2scratchIconURL,
        connectionSmallIconURL: facemesh2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'Handpose2Scratch',
        extensionId: 'handpose2scratch',
        collaborator: 'Cubroid',
        iconURL: handpose2scratchBgURL,
        insetIconURL: handpose2scratchIconURL,
        description: 'handpose2 scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: handpose2scratchIconURL,
        connectionSmallIconURL: handpose2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'QR',
        extensionId: 'qrcode',
        collaborator: 'Cubroid',
        iconURL: qrcode2scratchBgURL,
        insetIconURL: qrcode2scratchIconURL,
        description: 'QR code scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: qrcode2scratchIconURL,
        connectionSmallIconURL: qrcode2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'Speech2Scratch',
        extensionId: 'speech2scratch',
        collaborator: 'Cubroid',
        iconURL: speech2scratchBgURL,
        insetIconURL: speech2scratchIconURL,
        description: 'speech to scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: speech2scratchIconURL,
        connectionSmallIconURL: speech2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'ImageClassifier2Scratch',
        extensionId: 'ic2scratch',
        collaborator: 'Cubroid',
        iconURL: ic2scratchBgURL,
        insetIconURL: ic2scratchIconURL,
        description: 'Image Classifier to Scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: ic2scratchIconURL,
        connectionSmallIconURL: ic2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'TMPose2scratch',
        extensionId: 'tmpose2scratch',
        collaborator: 'Cubroid',
        iconURL: tmpose2scratchBgURL,
        insetIconURL: tmpose2scratchIconURL,
        description: 'tmpose to scratch',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: tmpose2scratchIconURL,
        connectionSmallIconURL: tmpose2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    {
        name: 'iftttwebhooks',
        extensionId: 'iftttwebhooks',
        collaborator: 'Cubroid',
        iconURL: iftttwebhooks2scratchBgURL,
        insetIconURL: iftttwebhooks2scratchIconURL,
        description: 'ifttt Web hooks',
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: false,
        useAutoScan: false,
        connectionIconURL: iftttwebhooks2scratchIconURL,
        connectionSmallIconURL: iftttwebhooks2scratchIconURL,
        connectingMessage: 'Connecting',
        helpLink: 'https://www.cubroid.com'
    },
    // {
    //     name: 'numberbank',
    //     extensionId: 'numberbank',
    //     collaborator: 'Cubroid',
    //     iconURL: cubroidIconURL,
    //     insetIconURL: cubroidMenuIconURL,
    //     description: 'numberbank',
    //     featured: true,
    //     disabled: false,
    //     bluetoothRequired: false,
    //     internetConnectionRequired: false,
    //     launchPeripheralConnectionFlow: false,
    //     useAutoScan: false,
    //     connectionIconURL: cubroidPeripheralIconURL,
    //     connectionSmallIconURL: cubroidMenuIconURL,
    //     connectingMessage: 'Connecting',
    //     helpLink: 'https://www.cubroid.com'
    // },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicIconURL,
        insetIconURL: musicInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penIconURL,
        insetIconURL: penInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoSensingIconURL,
        insetIconURL: videoSensingInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechIconURL,
        insetIconURL: text2speechInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateIconURL,
        insetIconURL: translateInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyIconURL,
        insetIconURL: makeymakeyInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitIconURL,
        insetIconURL: microbitInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: microbitConnectionIconURL,
        connectionSmallIconURL: microbitConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3IconURL,
        insetIconURL: ev3InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: ev3ConnectionIconURL,
        connectionSmallIconURL: ev3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO BOOST',
        extensionId: 'boost',
        collaborator: 'LEGO',
        iconURL: boostIconURL,
        insetIconURL: boostInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Bring robotic creations to life."
                description="Description for the 'LEGO BOOST' extension"
                id="gui.extension.boost.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: boostConnectionIconURL,
        connectionSmallIconURL: boostConnectionSmallIconURL,
        connectionTipIconURL: boostConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their BOOST."
                id="gui.extension.boost.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/boost'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedo2IconURL,
        insetIconURL: wedo2InsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        connectionIconURL: wedo2ConnectionIconURL,
        connectionSmallIconURL: wedo2ConnectionSmallIconURL,
        connectionTipIconURL: wedo2ConnectionTipIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'
    },
    {
        name: 'Go Direct Force & Acceleration',
        extensionId: 'gdxfor',
        collaborator: 'Vernier',
        iconURL: gdxforIconURL,
        insetIconURL: gdxforInsetIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Sense push, pull, motion, and spin."
                description="Description for the Vernier Go Direct Force and Acceleration sensor extension"
                id="gui.extension.gdxfor.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: gdxforConnectionIconURL,
        connectionSmallIconURL: gdxforConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their force and acceleration sensor."
                id="gui.extension.gdxfor.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/vernier'
    }
];
