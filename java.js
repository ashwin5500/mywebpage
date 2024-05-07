<script>
	function validateEmail670386000000414003()
	{
		var form = document.forms['WebToLeads670386000000414003'];
		var emailFld = form.querySelectorAll('[ftype=email]');
		var i;
		for (i = 0; i < emailFld.length; i++)
		{
			var emailVal = emailFld[i].value;
			if((emailVal.replace(/^\s+|\s+$/g, '')).length!=0 )
			{
				var atpos=emailVal.indexOf('@');
				var dotpos=emailVal.lastIndexOf('.');
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailVal.length)
				{
					alert('Please enter a valid email address. ');
					emailFld[i].focus();
					return false;
				}
			}
		}
		return true;
	}

 	  function checkMandatory670386000000414003() {
		var mndFileds = new Array('Last Name');
		var fldLangVal = new Array('Last\x20Name');
		for(i=0;i<mndFileds.length;i++) {
		  var fieldObj=document.forms['WebToLeads670386000000414003'][mndFileds[i]];
		  if(fieldObj) {
			if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
			 if(fieldObj.type =='file')
				{ 
				 alert('Please select a file to upload.'); 
				 fieldObj.focus(); 
				 return false;
				} 
			alert(fldLangVal[i] +' cannot be empty.'); 
   	   	  	  fieldObj.focus();
   	   	  	  return false;
			}  else if(fieldObj.nodeName=='SELECT') {
  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-None-') {
				alert(fldLangVal[i] +' cannot be none.'); 
				fieldObj.focus();
				return false;
			   }
			} else if(fieldObj.type =='checkbox'){
 	 	 	 if(fieldObj.checked == false){
				alert('Please accept  '+fldLangVal[i]);
				fieldObj.focus();
				return false;
			   } 
			 } 
			 try {
			     if(fieldObj.name == 'Last Name') {
				name = fieldObj.value;
 	 	 	    }
			} catch (e) {}
		    }
		}
		if(!validateEmail670386000000414003()){return false;}
		
	var urlparams = new URLSearchParams( window.location.search);
	if(urlparams.has('service') && (urlparams.get('service')==='smarturl')){
		var webform = document.getElementById('webform670386000000414003');
		 var service =  urlparams.get('service'); 
		var smarturlfield = document.createElement('input');
		smarturlfield.setAttribute('type','hidden');
		smarturlfield.setAttribute('value',service);
		smarturlfield.setAttribute('name','service');
		webform.appendChild(smarturlfield); 
	}
document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
	}

function tooltipShow670386000000414003(el){
	var tooltip = el.nextElementSibling;
	var tooltipDisplay = tooltip.style.display;
	if(tooltipDisplay == 'none'){
		var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
		for(i=0; i<allTooltip.length; i++){
			allTooltip[i].style.display='none';
		}
		tooltip.style.display = 'block';
	}else{
		tooltip.style.display='none';
	}
}
</script>
	<!-- Do not remove this --- Analytics Tracking code starts --><script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=394fd6b469bd94ca6f8f53fe3d62fbeb545cd4aea50eb8a9678ca335f51091ec7483bb814c8277337b7ff3d53c4eae9egid2479f205fba01c0a04f67804784743bb4713997c2e81c72fb65b9578eb805706gidfd80d74bde4182fecf0db915ccdb8b61500db94b699bd5cccefe7efc25350a83gid6059cf39566c8ff44dc108f7d01cd7941053f1c41fa8422c4f96e8e0e9de7d2f&tw=5e3cb75009a839d760c7876802a2cc57e16557905b8db4438a993f06b1c30dcd'></script><!-- Do not remove this --- Analytics Tracking code ends. --></form>
</div>

  <!-- Footer -->

  <footer class="white-section" id="footer">
    <div class="container-fluid">
      <i class="social-icon fab fa-facebook-f"></i>
      <i class="social-icon fab fa-twitter"></i>
      <i class="social-icon fab fa-instagram"></i>
      <i class="social-icon fas fa-envelope"></i>
      <p>© Copyright 2018 TinDog</p>
    </div>
	  <script type="text/javascript" nonce="{place_your_nonce_value_here}" src="https://desk.zoho.in/portal/api/web/inapp/72060000000114145?orgId=60014175892" defer></script>
  </footer>
 
	
</script>
