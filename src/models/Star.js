class Star {
    static starRating () {
        let settings = [{
            // initial rating value
            "rating":"4.3", 
            // max rating value
            "maxRating":"5", 
            // min rating value
            "minRating":"0.5", 
            // readonly mode?
            "readOnly":"no", 
            // custom rating symbols here
            "starImage":"./images/star.png ",
            "emptyStarImage":"./images/starbackground.png", 
            // symbol size
            "starSize":"16", 
            // step size for fractional rating
            "step":"0.5"
        }]
        rateSystem("ratingSystem", settings, function(rating, ratingTargetElement){
            ratingTargetElement.parentElement.parentElement.getElementsByClassName("ratingHolder")[0].innerHTML = rating;
          });
    }
}

export default Star