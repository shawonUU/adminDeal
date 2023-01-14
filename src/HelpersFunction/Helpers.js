export function ratingGenerator(rating,maxRating=5) {
    let fullStar = "<i class = 'las la-star active'></i>";
    let halfStar = "<i class = 'las la-star half'></i>";
    let emptyStar = "<i class = 'las la-star'></i>";
    rating = rating <= maxRating ? rating : maxRating;

    let fullStarCount = parseInt(rating);
    let halfStarCount =  Math.ceil(rating) - fullStarCount;
    let emptyStarCount = maxRating - fullStarCount - halfStarCount;

    let html = str_repeat(fullStar, fullStarCount);
    html += str_repeat(halfStar, halfStarCount);
    html += str_repeat(emptyStar, emptyStarCount);
    return html;
  }
  function str_repeat(str,number){
     let html = "";
    for(let i=0;i<number;i++){
        html+=str;
    }
    return html;
  }