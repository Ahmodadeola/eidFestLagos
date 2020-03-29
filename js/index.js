$(() => {
	const links = [...document.querySelectorAll(".nav-ul a")].slice(0, 5);
	links.forEach(link => {
		link.addEventListener("click", e => {
			$(".nav-ul a").removeClass("active-link");
			$(".nav-ul a")
				.next()
				.removeClass("active-indicator");
			link.classList.add("active-link");
			link.nextElementSibling.classList.add("active-indicator");
		});
	});

	const contactInputs = [...document.querySelectorAll("div.input-field input")];
	contactInputs.forEach(input => {
		input.addEventListener("focus", e => {
			$("div.input-field input, textarea").removeClass("purple-border");
			$("div.input-field input, textarea")
				.next()
				.removeClass("purple-text");

			input.classList.add("purple-border");
			console.log(input.nextElementSibling);
			input.nextElementSibling.classList.add("purple-text");
		});
	});

	const textarea = document.querySelector("div.input-field textarea");
	textarea.addEventListener("focus", e => {
		$("div.input-field input").removeClass("purple-border");
		$("div.input-field input, textarea")
			.next()
			.removeClass("purple-text");

		textarea.classList.add("purple-border");
		textarea.nextElementSibling.classList.add("purple-text");
	});

	let currentOffset = 0,
		prevOffset = 0,
		offsetDiff;
	window.addEventListener("scroll", e => {
		prevOffset = currentOffset;
		currentOffset = window.pageYOffset;
		offsetDiff = currentOffset - prevOffset;
		if (offsetDiff < 0) {
			return;
		}
		if (currentOffset >= 1086) {
			$("section").removeClass("styled-entrance");
			$("section#contact").addClass("styled-entrance show");
		} else if (currentOffset >= 468) {
			$("section").removeClass("styled-entrance");
			$("section#events").addClass("styled-entrance show");
		} else if (currentOffset >= 83) {
			$("section").removeClass("styled-entrance");
			$("section#about").addClass("styled-entrance show");
		}
	});

	$("ul#mobile-nav li").on("click", e => {
		console.log("I've been clicked");
		$("i.fa.fa-bars").trigger("click");
	});
});
