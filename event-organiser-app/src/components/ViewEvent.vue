<template>
        <div class="container">
    			
		<div class="row">
			<div class="col-sm-6">
				<div class="rating-block">                    
                    
					<h4 id="eventName">{{event.eventName}}</h4>
                    <img :src="event.eventImage" class="img-rounded" id="eventImage">
					<h2 class="bold padding-bottom-7" id="eventTimeDate"> <small>{{event.eventTimeDate}}</small></h2>
                    <h2 class="bold padding-bottom-7" id="eventLocation"> <small>{{event.eventLocation}}</small></h2>
                    <h2 class="bold padding-bottom-7" id="eventDescription"><small>{{event.eventDescription}}</small></h2>
                    <h2 class="bold padding-bottom-7" id="eventPrice"><small>{{event.eventPrice}}</small></h2>

					
				</div>
			</div>
			<div class="col-sm-6">
				<h4>Ticket Sales</h4>
				<div class="pull-left">
					<table class="col-sm-5 table-bordered table-striped table-condesed cf">
                        <thead class="cf">
                            <tr>
                                <th>Ticket ID</th>
                                <th>Event ID</th>
                                <th>User ID</th>
                                <th>PayFast ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="ticketId">{{ticketSale.id}}</td>
                                <td id="eventId">{{ticketSale.eventId}}</td>
                                <td id="ticketUserId">{{ticketSale.userId}}</td>
                                <td id="ticketPayFastId">{{ticketSale.payFastId}}</td>
                            </tr>
                        </tbody>
                    </table>
				</div>
				
				
				
				
			</div>			
		</div>			
		
		<!-- <div class="row">
			<div class="col-sm-7">
				<hr/>
				<div class="review-block">
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">nktailor</a></div>
							<div class="review-block-date">January 29, 2016<br/>1 day ago</div>
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
							</div>
							<div class="review-block-title">this was nice in buy</div>
							<div class="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
						</div>
					</div>
					<hr/>
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">nktailor</a></div>
							<div class="review-block-date">January 29, 2016<br/>1 day ago</div>
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
							</div>
							<div class="review-block-title">this was nice in buy</div>
							<div class="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
						</div>
					</div>
					<hr/>
					<div class="row">
						<div class="col-sm-3">
							<img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" class="img-rounded">
							<div class="review-block-name"><a href="#">nktailor</a></div>
							<div class="review-block-date">January 29, 2016<br/>1 day ago</div>
						</div>
						<div class="col-sm-9">
							<div class="review-block-rate">
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
								<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
								  <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
								</button>
							</div>
							<div class="review-block-title">this was nice in buy</div>
							<div class="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		
    </div> <!-- /container -->
</template>

<script>
export default {
    data(){
        return {
            event: {
                id: 1,
                organiserId: 1,
                eventName: 'Korujams Sport Day',
                eventLocation: 'Rosmead Ave, Wynberg, Cape Town, 7800',
                eventTimeDate: Date.now, 
                eventImage: 'https://dekhnews.com/wp-content/uploads/2016/04/Sports-Day-Poster.png',
                eventDescription: "Sports Day at St. Xavier’s Godavari School is a platform to showcase the talent and efforts put in by the student to make it a successful event. Sports here at SXG is not only about competition, it is also about having fun , being physically active , learning the basics of sports and building coordination and teamwork and so to give the students an opportunity to display their talent, self-confidence, patience, zeal and sportsmanship.The two- day Sports Day celebrations for seniors and juniors were held at the school on 4th and 5th November 2018 respectively. The day began with a march past presented by the students of all six teams- Lions, Tigers, Leopards, Panthers and Jaguar.",
                eventPrice: 150                
            }, 
            ticketSale: {
                id:2 ,
                eventId: 1,
                userId: 2,
                payFastId: 30
            }, 
        }
    }
}
</script>