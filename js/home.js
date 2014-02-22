var res;
$("#btn_get_repos").click(function() {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/"+$('#username').val()+"/repos?per_page=100",
        dataType: "json",
        success: function(result) {
			res=result;
			$("#repo_list").html("");
            for( i in result ) {
				j = parseInt(i) + 1;
				$("#repo_list").append(
                    "<tr><td>#"+j+"</td><td><a href='" + result[i].html_url + "'>" + result[i].name + "</a></td><td><a href='javascript:save2db("+i+");' class='dropbox-saver dropbox-dropin-btn dropbox-dropin-default'>" + "<span class='dropin-btn-status'></span>Save to Dropbox</a></td></tr>"
                );
            }
        }
    });
});

function save2db(i){
	Dropbox.save(res[i].html_url+"/archive/master.zip",res[i].name+".zip");
}
