function TicketGenerator(transportMode){
    var generateTicket = function(destination){
        return transportMode +"--"+destination+"123"
    }
    return generateTicket

}
var flightTicket = TicketGenerator("Flight")
alert(flightTicket("chennai"))
var carTicket = TicketGenerator("car")
alert(carTicket("Bengaluru"))