$(document).ready(function() {



	var compPick = Math.floor(Math.random() * 101) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

	

	var gOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 1: " + gOne); 
		
	var gTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + gTwo); 
		

	var gThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + gThree); 
		
	
	var gFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + gFour); 
		
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 

	function reset () {
		compPick = Math.floor(Math.random() * 102) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		gOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Gem 1: " + gOne); 
		$("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gOne + ">"); 

		gTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 2: " + gTwo); 
		$("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gTwo + ">"); 

		gemThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 3: " + gThree); 
		$("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gThree + ">");
	
		gFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Gem 4: " + gFour); 
		$("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 
