<script>
    import FeedbackForm from './components/FeedbackForm.svelte';
    import FeedbackList from './components/FeedbackList.svelte';
    import FeedbackStats from './components/FeedbackStats.svelte'; 
    
    /**
     * We can use createEventDispatcher to send event from child component to parent component,
     * but we use stores in here to make code cleaner
    */
</script>

<main class="container">
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList />
</main>