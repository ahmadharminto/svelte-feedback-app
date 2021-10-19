import { writable } from 'svelte/store';

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 5,
        text: 'xxxxxxxxx'
    },
    {
        id: 2,
        rating: 7,
        text: 'yyyyyyyy'
    },
    {
        id: 3,
        rating: 4,
        text: 'zzzzzzzz'
    }
])