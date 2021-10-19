<script>
    // import {onMount, onDestroy} from 'svelte';
    import {FeedbackStore} from '../stores';
    import FeedbackItem from './FeedbackItem.svelte';
    import { fade, scale } from 'svelte/transition';
    
    // let feedbacks = [];
    // const unsubscribe = FeedbackStore.subscribe((data) => feedbacks = data);
    // onMount(() => {
    //     console.log(feedbacks);
    // });
    // onDestroy(() => {
    //     unsubscribe();
    // });
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade="{{ duration: 500 }}">
        <FeedbackItem item={fb} on:delete-feedback />
    </div>
{/each}