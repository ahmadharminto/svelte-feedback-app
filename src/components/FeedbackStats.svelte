<script>
    import {FeedbackStore} from '../stores';
    
    let count;
    let average;


    $: count = $FeedbackStore.length;
    $: average = roundTo2($FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length);

    const roundTo2 = (num) => {
        return +(Math.round(num + "e+2")  + "e-2");
    }   
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Rating average : {average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
</style>