<template>
    <div class="container mt-5 mb-5">
	<div class="row">
		<div class="col-md-6 offset-md-3">
			<h4>Task Thread</h4>
			<ul class="timeline">
				<li >

					<p id="taskMessageThreadMessage">{{taskThread.threadMessage}}</p>
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
            taskThread: {
                id: 4,
                taskId: 3,
                threadMessage: 'Hello how far is the progress on this task',
                organiserId: 1,
                teamMemberId: 2,
                id: 2
            }, 
        }
    }
}
</script>