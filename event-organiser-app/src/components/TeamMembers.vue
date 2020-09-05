<template>
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div class="card">
                <img class="card-img-top" src="https://picsum.photos/200/150/?random">
                <div class="card-block">
                    <h5 class="text-bold" id="teamMemberName">{{teamMembersProfile}}</h5>
                </div>
            </div>
        </div>
       
       
    </div>
    
</div>
</template>

<script>
export default {
    data(){
        return {
            teamMembersProfile : {
                emailAddress: 'abc@gmail.com',
                avatar: 'https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png',
                name: 'abcde',
                id: 2

            },
        }
    }
}
</script>