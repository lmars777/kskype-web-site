var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Copyright (c) 1996-1997 Athenia Associates.
// http://www.webreference.com/js/
// License is granted if and only if this entire
// copyright notice is included. By Tomer Shiran.

var localization = {
    "string1":
        {"en": "Thanks for signing in, ", "et": "Tänud, et sisse logisid, ", "de": "Vielen Dank für Ihre Registrierung, ", "es": "Gracias por registrarte, ", "ja": " サインインできました。", "fr": "Merci de vous être identifier, ", "it": "Grazie per aver effettuato l'accesso, ", "pt": "Obrigada por entrar, ", "sv": "Tack för att du loggade in, "},
    "string2":
        {"en": ". Now you can comment. ", "et": ". Nüüd saad siin kommenteerida. ", "de": ". Sie können jetzt Kommentare verfassen. ", "es": ". Ahora puedes comentar. ", "ja": "さん、コメントをお願いします。", "fr": ". Maintenant vous pouvez laisser un commentaire. ", "it": ". Adesso puoi commentare. ", "pt": ". Agora você pode comentar. ", "sv": ". Nu kan du kommentera. "},
    "string3":
        {"en": "Sign out", "et": "Logi välja", "de": "Abmelden", "es": "Cerrar sesión.", "ja": "サインアウト", "fr": "Déconnexion", "it": "Esci", "pt": "Sair", "sv": "Logga ut"},
    "string4":
        {"en": "You are not signed in. You need to have a Skype Name to comment on this blog. If you do not have one yet, <a href=\"http://www.skype.com/go/download\">download Skype</a> and create a Skype Name now. ", "et": "Sa pole sisse loginud. Siin blogis kommenteerimiseks pead oma Skype'i nimega sisse logima. Kui sul veel oma Skype'i nime pole, siis <a href=\"http://www.skype.com/go/download\">paigalda endale Skype</a>. ", "de": "Sie sind nicht angemeldet. Sie müssen einen Skype Namen besitzen, um in diesem Blog Kommentare verfassen zu können. Wenn Sie noch keinen haben, <a href=\"http://www.skype.com/go/download\">laden Sie Skype herunter</a> und erstellen sich jetzt einen Skype Namen. ", "es": " No te has registrado. Necesitas una cuenta de Skype para añadir tus comentarios en este blog. Si todavía no tienes una cuenta, <a href=\"http://www.skype.com/go/download\">descárgate Skype</a> y créate un usuario ahora.", "ja": "サインインしていません。このブログへコメントするには、Skype名が必要です。お持ちでないかたは、Skypeを<a href=\"http://www.skype.com/go/download\">ダウンロード</a>し、Skype名を作成してください。", "fr": "Vous devez avoir une adresse Skype pour déposer un commentaire sur ce blog. Pour obtenir votre adresse, <a href=\"http://www.skype.com/go/download\">téléchargez Skype</a>!", "it": "Non hai effettuato l'accesso. Hai bisogno di un Nome utente Skype per commentare il blog. Se non ne hai uno <a href=\"http://www.skype.com/go/download\"> scarica Skype</a> e crea un Nome utente ora. ", "pt": "Você não está logado. Você precisa ter um Nome Skype (Skype Name) para comentar neste blog. Se você ainda não tem um, <a href=\"http://www.skype.com/intl/pt/download/\">faça download do Skype</a> e crie um Nome Skype agora. ", "sv": "Du är inte inloggad. Du behöver ett Skype Name för att kommentera på denna blog. Om du inte har ett, <a href=\"http://www.skype.com/go/download\">ladda hem Skype</a> och skapat redan nu. "},
    "string5":
        {"en": "Sign in", "et": "Logi sisse", "de": "Anmelden", "es": "Iniciar sesión", "ja": "サインイン", "fr": "Connectez-vous", "it": "Accedi", "pt": "Entre", "sv": "Logga in"},
    "string6":
        {"en": "If you have a Skype username, you can ", "et": "Kui sul on Skype'i nimi olemas, saad sellega siin kommenteerimiseks ", "de": "Wenn Sie bereits einen Skype Namen besitzen, können Sie sich ", "es": "Si tienes un usuario de Skype, puedes", "ja": "Skype名をお持ちのかたは、", "fr": "si vous avez un compte skype vous pouvez ", "it": "Se hai un Nome utente Skype, puoi ", "pt": "Se você tem um Nome Skype você pode ", "sv": "Om du har ett Skype användarnamn, kan du "},
    "string7":
        {"en": "sign in", "et": "sisse logida.", "de": "hier anmelden", "es": "iniciar sesión", "ja": "こちらから", "fr": "enregistrez vous.", "it": "accedere", "pt": "entrar", "sv": "logga in "},
    "string8":
        {"en": "to use it here.", "et": "", "de": ", um diesen zu nutzen.", "es": "usarlo aquí", "ja": "サインインしてください。", "fr": "to use it here.", "it": "e usarlo qui.", "pt": "para usar aqui.", "sv": "för att använda det."}
};

if(typeof(localized_language ) == "undefined") 
    var localized_language = "en";

function setCookie (name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") +
        (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "secure" : "");
    document.cookie = curCookie;
}

function getCookie (name) {
    var prefix = name + '=';
    var c = document.cookie;
    var nullstring = '';
    var cookieStartIndex = c.indexOf(prefix);
    if (cookieStartIndex == -1)
        return nullstring;
    var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = c.length;
    return unescape(c.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie (name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}

function fixDate (date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0)
        date.setTime(date.getTime() - skew);
}

function rememberMe (f) {
    var now = new Date();
    fixDate(now);
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    now = now.toGMTString();
    if (f.author != undefined)
       setCookie('mtcmtauth', f.author.value, now, '/', '', '');
    if (f.email != undefined)
       setCookie('mtcmtmail', f.email.value, now, '/', '', '');
    if (f.url != undefined)
       setCookie('mtcmthome', f.url.value, now, '/', '', '');
}

function forgetMe (f) {
    deleteCookie('mtcmtmail', '/', '');
    deleteCookie('mtcmthome', '/', '');
    deleteCookie('mtcmtauth', '/', '');
    f.email.value = '';
    f.author.value = '';
    f.url.value = '';
}

function hideDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function showDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

var commenter_name;

function individualArchivesOnLoad(commenter_name) {

    hideDocumentElement('trackbacks-info');

    if (commenter_name) {
        showDocumentElement('commenting-bubble');
       showDocumentElement('commenting-bubble-footer');
    } else {
        hideDocumentElement('commenting-bubble');
        hideDocumentElement('commenting-bubble-footer');
    }




    if (document.comments_form) {
        if (document.comments_form.email != undefined &&
            (mtcmtmail = getCookie("mtcmtmail")))
            document.comments_form.email.value = mtcmtmail;
        if (document.comments_form.author != undefined &&
            (mtcmtauth = getCookie("mtcmtauth")))
            document.comments_form.author.value = mtcmtauth;
        if (document.comments_form.url != undefined && 
            (mtcmthome = getCookie("mtcmthome")))
            document.comments_form.url.value = mtcmthome;
        if (mtcmtauth || mtcmthome) {
            document.comments_form.bakecookie.checked = true;
        } else {
            document.comments_form.bakecookie.checked = false;
        }
    }
}

function writeSkypeGreeting(commenter_name, entry_id) {
    if (commenter_name) {
        document.write('<p>' + localization.string1[localized_language] + commenter_name +
          localization.string2[localized_language] +
          '(<a href="https://web.archive.org/web/20080223135755/http://share.skype.com/cgi/mt/plugins/skypeid-comment/signon.cgi?__mode=signout&logout=1&entry_id=' + entry_id + '">' + localization.string3[localized_language] + '</a>)</p>');
    } else {
        document.write('<p>' + localization.string4[localized_language] +
          '<a href="https://web.archive.org/web/20080223135755/https://secure.skype.com/store/authentication/login.html?partner_id=48ae0188f0a7c35c324667a62f462440&return_url=http%3A%2F%2Fshare.skype.com%2Fcgi%2Fmt%2Fplugins%2Fskypeid-comment%2Fsignon.cgi%3F__mode%3Dverify&token=' + entry_id + '">'+ localization.string5[localized_language] +'</a></p>');


    }

}


function writeTypeKeyGreeting(commenter_name, entry_id) {
return writeSkypeGreeting(commenter_name, entry_id);


    if (commenter_name) {
        document.write('<p> ' + commenter_name +
          ''+
          '(<a href="https://web.archive.org/web/20080223135755/http://share.skype.com/cgi/mt/mt-comments.cgi?__mode=handle_sign_in&amp;static=1&amp;logout=1&entry_id=' + entry_id + '"></a>)</p>');
    } else {
        document.write('<p> '+
          '<a href="https://web.archive.org/web/20080223135755/https://www.typekey.com/t/typekey/login?&amp;lang=en_US&amp;t=skype&amp;v=1.1&amp;_return=http://share.skype.com/cgi/mt/mt-comments.cgi%3f__mode=handle_sign_in%26static=1%26entry_id=' + entry_id + '"></a></p>');


    }

}

if ('share.skype.com' != 'share.skype.com') {
    document.write('<script src="https://web.archive.org/web/20080223135755/http://share.skype.com/cgi/mt/mt-comments.cgi?__mode=cmtr_name_js"></script>');
} else {
    commenter_name = getCookie('commenter_name');
}



function formatSkypeID_old(skypename) {
    document.write('<script type="text/javascript" src="https://web.archive.org/web/20080223135755/http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>' +
    '<a href="skype:' + skypename + '?userinfo" onclick="return skypeCheck();"><img src="https://web.archive.org/web/20080223135755/http://download.skype.com/share/skypebuttons/buttons/userinfo_blue_transparent_108x23.png" style="border: none; vertical-align: bottom;" width="108" height="23" alt="View my profile" /></a>');
}


function formatSkypeID(skypename) {
    document.write('<script type="text/javascript" src="https://web.archive.org/web/20080223135755/http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>' +
    '<a href="skype:' + skypename + '?userinfo" onclick="return skypeCheck();"><img src="https://web.archive.org/web/20080223135755/http://mystatus.skype.com/smallicon/' + skypename.replace('.', '%2E') + '" style="border: none;" width="16" height="16" alt="My status" /></a>');
}


function subscription() {
	var blockDisplay = document.getElementById('subscriptionDetails');
	var subContainer = document.getElementById('subscribe');
	if (blockDisplay.style.display == 'none') {
		blockDisplay.style.display = '';
	} else {
		blockDisplay.style.display = 'none';
	}
	if (subContainer) {
		if (subContainer.className == '') {
			subContainer.className = 'closed';
		} else {
			subContainer.className = '';
		}
	}
}

function getExpiryDate(nodays){
	var UTCstring;
	Today = new Date();
	nomilli=Date.parse(Today);
	Today.setTime(nomilli+nodays*24*60*60*1000);
	UTCstring = Today.toUTCString();
	return UTCstring;
}

}
/*
     FILE ARCHIVED ON 13:57:55 Feb 23, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:17:20 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.591
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 4.733
  LoadShardBlock: 134.384 (3)
  PetaboxLoader3.datanode: 54.061 (4)
  PetaboxLoader3.resolve: 110.735 (2)
  load_resource: 70.472
*/