import { Intro } from './components/screens/Intro';
import { Reception } from './components/screens/locations/Reception';
import {
    coffeeBrake, meeting, reception, workPlace, workPlace2,
    coffee, interact2Finish, meetingRect, language,
    pre1, preInteract1, preInteract2, preInteract3,
    preQuestion2, receptionRect, winModal,
    workPlaceRect, workPlace2Rect, welcome
} from './constants/images';
import { Question0 } from './components/screens/questions/Question0';
import { Meeting } from './components/screens/locations/Meeting';
import { PreQuestion1 } from './components/screens/questions/Question1/PreQuestion1';
import { Question1 } from './components/screens/questions/Question1';
import { WorkPlace } from './components/screens/locations/WorkPlace';
import { PostQuestion1 } from './components/screens/questions/Question1/PostQuestion1';
import { PreInteract1 } from './components/screens/interacts/Interact1/PreInteract1';
import { Interact1 } from './components/screens/interacts/Interact1';
import { PreQuestion2 } from './components/screens/questions/Question2/PreQuestion2';
import { Question2 } from './components/screens/questions/Question2';
import { CoffeeBrake } from './components/screens/locations/CoffeeBreak';
import { PostQuestion2 } from './components/screens/questions/Question2/PostQuestion2';
import { PreInteract2 } from './components/screens/interacts/Interact2/PreInteract2';
import { Interact2 } from './components/screens/interacts/Interact2';
import { PostInteract2 } from './components/screens/interacts/Interact2/PostInteract2';
import { WorkPlace2 } from './components/screens/locations/WorkPlace2';
import { PreInteract3 } from './components/screens/interacts/Interact3/PreInteract3';
import { Interact3 } from './components/screens/interacts/Interact3';
import { PostInteract3 } from './components/screens/interacts/Interact3/PostInteract3';
import { MailForm } from './components/screens/MailForm';

export const screens = [
    {
        id: 0,
        component: Intro,
        preloadImages: [reception, receptionRect],
    },
    {
        id: 1,
        component: Reception,
        preloadImages: [meeting, language, meetingRect],
    },
    {
        id: 2,
        component: Question0,
        preloadImages: [workPlace, pre1],
    },
    {
        id: 3,
        component: Meeting,
        preloadImages: [workPlaceRect, winModal],
    },
    {
        id: 3,
        component: PreQuestion1,
        preloadImages: [workPlace2],
    },
    {
        id: 4,
        component: Question1,
        preloadImages: [coffeeBrake],
    },
    {
        id: 5,
        component: WorkPlace,
        preloadImages: [preInteract1],
    },
    {
        id: 6,
        component: PostQuestion1,
        preloadImages: [preQuestion2],
    },
    {
        id: 7,
        component: PreInteract1,
        preloadImages: [coffee],
    },
    {
        id: 8,
        component: Interact1,
        preloadImages: [],
    },
    {
        id: 9,
        component: PreQuestion2,
        preloadImages: [preInteract2],
    },
    {
        id: 10,
        component: Question2,
        preloadImages: [workPlace2Rect],
    },
    {
        id: 11,
        component: CoffeeBrake,
        preloadImages: [preInteract3],
    },
    {
        id: 12,
        component: PostQuestion2,
        preloadImages: [welcome],
    },
    {
        id: 13,
        component: PreInteract2,
        preloadImages: [interact2Finish],
    },
    {
        id: 14,
        component: Interact2,
        preloadImages: [],
    },
    {
        id: 15,
        component: PostInteract2,
        preloadImages: [],
    },
    {
        id: 16,
        component: WorkPlace2,
        preloadImages: [],
    },
    {
        id: 17,
        component: PreInteract3,
        preloadImages: [],
    },
    {
        id: 18,
        component: Interact3,
        preloadImages: [],
    },
    {
        id: 19,
        component: PostInteract3,
        preloadImages: [],
    },
    {
        id: 20,
        component: MailForm,
        preloadImages: [],
    },
];
