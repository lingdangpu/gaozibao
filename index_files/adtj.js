(function () {
	var int = setInterval(function () {
		var div = document.getElementsByTagName('div')[0];
		if (div && div.getElementsByTagName('iframe')[0]) {
			var iframe = div.getElementsByTagName('iframe')[0];
			try {
				var doc = iframe.contentDocument;
				if (doc === null) {
					query()
					clearInterval(int);
				}
			} catch (e) {
				query()
				clearInterval(int);
			}
		}
	}, 10)

	function query() {
		var id = window.qwermn_ad_id;
		if(!id) return
		var url = 'https://360api.33445522.com/admin/adv/anMx23e?mw=' + id;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				var data = xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}
})()