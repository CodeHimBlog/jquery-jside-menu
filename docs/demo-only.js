/*!  Author: Asif Mughal
 *   URL: https://www.codehim.com
 *   License: MIT License
 *   Copyright (c) 2018 - 2019 - Asif Mughal
 */
$(function () {
	var a = $(".menu-container, .menu-head, .menubar");
	$(".menu-position").on("change", function () {
		$(a).not(".menubar").addClass($(this).val());
		$(".j-pos").html('jSidePosition: "position-right",');
		if ($(this).val() == "position-left") {
			$(a).removeClass("position-right");
			$(".j-pos").html('jSidePosition: "position-left",');
			$(".menu-trigger").removeClass("right").addClass("left")
		} else {
			$(a).removeClass("position-left");
			$(".menu-trigger").removeClass("left").addClass("right")
		}
	});
	$(".bg-color").on("change", function () {
		var b = $(this).val();
		$(a).css({
			background: b,
		});
		$(".bg-color-input").val(b)
	});
	$(".bg-color-input").on("input", function () {
		$(a).css({
			background: $(this).val(),
		})
	});
	$("#set-top").change(function () {
		$(".menubar").addClass("sticky");
		$(".j-sticky").html("jSideSticky: true,")
	});
	$("#set-st").change(function () {
		$(".menubar").removeClass("sticky");
		$(".j-sticky").html("jSideSticky: false,")
	});
	$(".theme-tray span").click(function () {
		var c = $(this).attr("class");
		$(".menubar").attr("class", c).addClass("menubar sticky");
		$(".menu-container").attr("class", c).addClass("menu-container position-left");
		$(".menu-head").attr("class", c).addClass("menu-head position-left");
		var b = 'jSideSkin:"' + c + '",';
		$(".j-skin").html(b)
	})
});
