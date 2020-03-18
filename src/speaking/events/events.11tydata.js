module.exports = function isEventPast() {
 
    dateEvent = new Date('date'.value);
    dateToday = new Date();
     
    if (dateEvent < dateToday)
    {
    return true;
    }
    return false;
    }