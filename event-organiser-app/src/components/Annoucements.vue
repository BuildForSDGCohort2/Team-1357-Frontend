<template>
    <div class="container mt-5 mb-5">
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<h4>Latest News</h4>
			<ul class="timeline">
				<li id="annoucementId">
                    <img :src="annoucement.annoucementImage" class="img-rounded" id="annoucementImage">

					<p id="annoucementMessage">{{annoucement.annoucementMessage}}</p>
				</li>
				
			</ul>
		</div>
	</div>
</div>
</template>

<script>
export default {
    data(){
        return {
            annoucement: {
                id: 2, 
                id: 1,
                annoucementMessage: 'Date changes coming soon , due to the corona virus',
                annoucementImage: 'https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png',
                organiserId: 1
            }, 
        }
    }
}
</script>

<style  scoped>
ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #22c0e8;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>