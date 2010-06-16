olark.extend(function(api){
	api.chat.onReady(function(){
		var history = api.data.getVisitorObject({key: 'history', initialValue: ''});
		var d = new Date();
		var curr_hour = d.getHours();
		var curr_min = d.getMinutes();
		var curr_sec = d.getSeconds();		
		var theTime = curr_hour + ":" + curr_min + ":" + curr_sec;
		if (history.get() == '')
		{
			history.set('Browsing History:\n');
		}
		history.set(history.get() + theTime + '- ' + document.location.pathname + '\n');
		api.chat.updateVisitorStatus({snippet: history.get()})
	});											
});