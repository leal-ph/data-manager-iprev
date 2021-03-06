export const mailtemplate =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
  '<html xmlns="http://www.w3.org/1999/xhtml">' +
  "<head>" +
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
  '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
  "  <title>Bocayuva Advogados</title>" +
  '  <style type="text/css" rel="stylesheet" media="all">' +
  "    /* Base ------------------------------ */" +
  "    *:not(br):not(tr):not(html) {" +
  "      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" +
  "      -webkit-box-sizing: border-box;" +
  "      box-sizing: border-box;" +
  "    }" +
  "    body {" +
  "      width: 100% !important;" +
  "      height: 100%;" +
  "      margin: 0;" +
  "      line-height: 1.4;" +
  "      background-color: #F5F7F9;" +
  "      color: #839197;" +
  "      -webkit-text-size-adjust: none;" +
  "    }" +
  "    a {" +
  "      color: green;" +
  "    }" +
  "" +
  "    /* Layout ------------------------------ */" +
  "    .email-wrapper {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "      background-color: #F5F7F9;" +
  "    }" +
  "    .email-content {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "    }" +
  "" +
  "    /* Masthead ----------------------- */" +
  "    .email-masthead {" +
  "      padding: 25px 0;" +
  "      text-align: center;" +
  "    }" +
  "    .email-masthead_logo {" +
  "      max-width: 400px;" +
  "      border: 0;" +
  "    }" +
  "    .email-masthead_name {" +
  "      font-size: 16px;" +
  "      font-weight: bold;" +
  "      color: #839197;" +
  "      text-decoration: none;" +
  "      text-shadow: 0 1px 0 white;" +
  "    }" +
  "" +
  "    /* Body ------------------------------ */" +
  "    .email-body {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "      border-top: 1px solid #E7EAEC;" +
  "      border-bottom: 1px solid #E7EAEC;" +
  "      background-color: #FFFFFF;" +
  "    }" +
  "    .email-body_inner {" +
  "      width: 570px;" +
  "      margin: 0 auto;" +
  "      padding: 0;" +
  "    }" +
  "    .email-footer {" +
  "      width: 570px;" +
  "      margin: 0 auto;" +
  "      padding: 0;" +
  "      text-align: center;" +
  "    }" +
  "    .email-footer p {" +
  "      color: #839197;" +
  "    }" +
  "    .body-action {" +
  "      width: 100%;" +
  "      margin: 30px auto;" +
  "      padding: 0;" +
  "      text-align: center;" +
  "    }" +
  "    .body-sub {" +
  "      margin-top: 25px;" +
  "      padding-top: 25px;" +
  "      border-top: 1px solid #E7EAEC;" +
  "    }" +
  "    .content-cell {" +
  "      padding: 35px;" +
  "    }" +
  "    .align-right {" +
  "      text-align: right;" +
  "    }" +
  "" +
  "    /* Type ------------------------------ */" +
  "    h1 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 19px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    h2 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 16px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    h3 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 14px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    p {" +
  "      margin-top: 0;" +
  "      color: #839197;" +
  "      font-size: 16px;" +
  "      line-height: 1.5em;" +
  "      text-align: left;" +
  "    }" +
  "    p.sub {" +
  "      font-size: 12px;" +
  "    }" +
  "    p.center {" +
  "      text-align: center;" +
  "    }" +
  "" +
  "    /* Buttons ------------------------------ */" +
  "    .button {" +
  "      display: inline-block;" +
  "      width: 200px;" +
  "      background-color: #414EF9;" +
  "      border-radius: 3px;" +
  "      color: #ffffff;" +
  "      font-size: 15px;" +
  "      line-height: 45px;" +
  "      text-align: center;" +
  "      text-decoration: none;" +
  "      -webkit-text-size-adjust: none;" +
  "      mso-hide: all;" +
  "    }" +
  "    .button--green {" +
  "      background-color: #28DB67;" +
  "    }" +
  "    .button--red {" +
  "      background-color: #FF3665;" +
  "    }" +
  "    .button--blue {" +
  "      background-color: #e0cf10;" +
  "      font-size: 15px;" +
  "      color:white;" +
  "    }" +
  "    .center {" +
  "      display: block;" +
  "      margin-left: auto;" +
  "      margin-right: auto;" +
  "    " +
  "}" +
  "" +
  "    /*Media Queries ------------------------------ */" +
  "    @media only screen and (max-width: 600px) {" +
  "      .email-body_inner," +
  "      .email-footer {" +
  "        width: 100% !important;" +
  "      }" +
  "    }" +
  "    @media only screen and (max-width: 500px) {" +
  "      .button {" +
  "        width: 100% !important;" +
  "      }" +
  "    }" +
  "  </style>" +
  "</head>" +
  "<body>" +
  '  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">' +
  "    <tr>" +
  '      <td align="center">' +
  '        <table class="email-content" width="100%" cellpadding="0" cellspacing="0">' +
  "          <!-- Logo -->" +
  "          <tr>" +
  '            <td class="email-masthead">' +
  '              <a class="email-masthead_name"> <img src="https://i.imgur.com/i6B5tP8.png" class="center"></a>' +
  "            </td>" +
  "          </tr>" +
  "          <!-- Email Body -->" +
  "          <tr>" +
  '            <td class="email-body" width="100%">' +
  '              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">' +
  "                <!-- Body content -->" +
  "                <tr>" +
  '                  <td class="content-cell">' +
  "                    <h1>Verifique seu endere??o de email!</h1>" +
  "                    <p>Seja bem vindo(a) ao portal Bocayuva Advogados! Clique no bot??o abaixo para verificar seu endere??o de e-mail.</p>" +
  "                    <!-- Action -->" +
  '                    <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0">' +
  "                      <tr>" +
  '                        <td align="center">' +
  "                          <div>" +
  '                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{action_url}}" style="height:45px;v-text-anchor:middle;width:200px;" arcsize="7%" stroke="f" fill="t">' +
  '                            <v:fill type="tile" color="#414EF9" />' +
  "                            <w:anchorlock/>" +
  '                            <center style="color:#ffffff;font-family:sans-serif;font-size:15px;">Verify Email</center>' +
  "                          </v:roundrect><![endif]-->" +
  '                            <a href="{{action_url}}" class="button button--blue"><b>Verificar E-mail</b></a>' +
  "                          </div>" +
  "                        </td>" +
  "                      </tr>" +
  "                    </table>" +
  "                    <p>Muito obrigado,<br>Equipe Bocayuva Advogados</p>" +
  "                    <!-- Sub copy -->" +
  '                    <table class="body-sub">' +
  "                      <tr>" +
  "                        <td>" +
  "                          </p>" +
  "                        </td>" +
  "                      </tr>" +
  "                    </table>" +
  "                  </td>" +
  "                </tr>" +
  "              </table>" +
  "            </td>" +
  "          </tr>" +
  "          <tr>" +
  "            <td>" +
  '              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0">' +
  "                <tr>" +
  '                  <td class="content-cell">' +
  '                    <p class="sub center">' +
  "                      Bocayuva Advogados" +
  "                      <br>Bras??lia, DF" +
  "                    </p>" +
  "                  </td>" +
  "                </tr>" +
  "              </table>" +
  "            </td>" +
  "          </tr>" +
  "        </table>" +
  "      </td>" +
  "    </tr>" +
  "  </table>" +
  "</body>" +
  "</html>"

export const verifiedtemplate =
  "<html>" +
  "  <head>" +
  '    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">' +
  "  </head>" +
  "    <style>" +
  "      body {" +
  "        text-align: center;" +
  "        padding: 40px 0;" +
  "        background: #EBF0F5;" +
  "      }" +
  "        h1 {" +
  "          color: #0f1c66;" +
  '          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;' +
  "          font-weight: 900;" +
  "          font-size: 40px;" +
  "          margin-bottom: 10px;" +
  "        }" +
  "        .button {" +
  "        background-color: #0f1c66;" +
  "        border: none;" +
  "        color: white;" +
  "        padding: 15px 32px;" +
  "        text-align: center;" +
  "        text-decoration: none;" +
  "        display: inline-block;" +
  "        font-size: 16px;" +
  "        }" +
  "        p {" +
  "          color: #404F5E;" +
  '          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;' +
  "          font-size:20px;" +
  "          margin: 0;" +
  "        }" +
  "      i {" +
  "        color: #0f1c66;" +
  "        font-size: 100px;" +
  "        line-height: 200px;" +
  "        margin-left:-15px;" +
  "      }" +
  "      .card {" +
  "        background: white;" +
  "        padding: 60px;" +
  "        border-radius: 4px;" +
  "        box-shadow: 0 2px 3px #C8D0D8;" +
  "        display: inline-block;" +
  "        margin: 0 auto;" +
  "      }" +
  "    </style>" +
  "    <body>" +
  '      <div class="card">' +
  '        <img src="{{logo_url}}" class="center" style="margin-bottom: 10px;">' +
  '      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">' +
  '        <i class="checkmark">???</i>' +
  "      </div>" +
  "        <h1>E-mail verificado com sucesso!</h1> " +
  "        <p>Recebemos sua verifica????o!<br/> Aproveite nosso portal!</p>" +
  "        <br></br>" +
  '        <button class="button"><a href="http://app.bocayuvaadvogados.com.br" target="_blank" style="color: #C8D0D8;">Ir para o Portal</a></button>' +
  "        " +
  "      </div>" +
  "    </body>" +
  "</html>"

export const passrenewedtemplate =
  "<html>" +
  "  <head>" +
  '    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">' +
  "  </head>" +
  "    <style>" +
  "      body {" +
  "        text-align: center;" +
  "        padding: 40px 0;" +
  "        background: #EBF0F5;" +
  "      }" +
  "        h1 {" +
  "          color: #0f1c66;" +
  '          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;' +
  "          font-weight: 900;" +
  "          font-size: 40px;" +
  "          margin-bottom: 10px;" +
  "        }" +
  "        .button {" +
  "        background-color: #0f1c66;" +
  "        border: none;" +
  "        color: white;" +
  "        padding: 15px 32px;" +
  "        text-align: center;" +
  "        text-decoration: none;" +
  "        display: inline-block;" +
  "        font-size: 16px;" +
  "        }" +
  "        p {" +
  "          color: #404F5E;" +
  '          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;' +
  "          font-size:20px;" +
  "          margin: 0;" +
  "        }" +
  "      i {" +
  "        color: #0f1c66;" +
  "        font-size: 100px;" +
  "        line-height: 200px;" +
  "        margin-left:-15px;" +
  "      }" +
  "      .card {" +
  "        background: white;" +
  "        padding: 60px;" +
  "        border-radius: 4px;" +
  "        box-shadow: 0 2px 3px #C8D0D8;" +
  "        display: inline-block;" +
  "        margin: 0 auto;" +
  "      }" +
  "    </style>" +
  "    <body>" +
  '      <div class="card">' +
  '        <img src="{{logo_url}}" class="center" style="margin-bottom: 10px;">' +
  '      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">' +
  '        <i class="checkmark">???</i>' +
  "      </div>" +
  "        <h1>Troca de senha realizada com sucesso.</h1> " +
  "        <p>Sua senha foi alterada!<br/> Aproveite nosso portal!</p>" +
  "        <br></br>" +
  '        <button class="button"><a href="http://app.bocayuvaadvogados.com.br" target="_blank" style="color: #C8D0D8;">Ir para o Portal</a></button>' +
  "        " +
  "      </div>" +
  "    </body>" +
  "</html>"

export const notificationTemplate =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
  '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">' +
  "" +
  "<head>" +
  '    <meta charset="UTF-8">' +
  '    <meta content="width=device-width, initial-scale=1" name="viewport">' +
  '    <meta name="x-apple-disable-message-reformatting">' +
  '    <meta http-equiv="X-UA-Compatible" content="IE=edge">' +
  '    <meta content="telephone=no" name="format-detection">' +
  "    <title></title>" +
  "</head>" +
  "" +
  "<body>" +
  '    <div class="es-wrapper-color">' +
  '        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">' +
  "            <tbody>" +
  "                <tr>" +
  '                    <td class="esd-email-paddings" valign="top">' +
  '                        <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" esd-custom-block-id="7954" align="center">' +
  '                                        <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p15t es-p15b es-p10r es-p10l" align="left">' +
  "                                                                                                              " +
  '                                                        <table class="es-right" cellspacing="0" cellpadding="0" align="right">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="278" align="left">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  "                                                                                    " +
  "                                                                                </tr>" +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                        " +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">' +
  "                            <tbody>" +
  "                                <tr></tr>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" esd-custom-block-id="7799" align="center">' +
  '                                        <table class="es-header-body" style="background-color:#f8f8f8;" width="600" height="80" cellspacing="0" cellpadding="0" bgcolor="#f8f8f8" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p35t es-p40b es-p35r es-p35l" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="530" valign="top" align="center">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-m-txt-c" align="center">' +
  '                                                                                        <img src="https://i.imgur.com/i6B5tP8.png" class="center" style="margin-bottom: 10px;">' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" align="center">' +
  '                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p35t es-p25b es-p35r es-p35l" esd-custom-block-id="7811" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="530" valign="top" align="center">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-p20t es-p5b" align="left">' +
  '                                                                                        <h3 style="color: #333333;">Ol??, {{clientName}}!<br></h3>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-p15t es-p10b" align="left">' +
  '                                                                                        <p style="font-size: 16px; color: #777777;">Seu processo de n??mero {{lawsuitCode}} teve uma atualiza????o interna de andamento pelo advogado(a) <b>{{lawyerName}}</b>. Segue o texto:</p>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-p5t es-p10b" align="left">' +
  '                                                                                        <p style="font-size: 16px; color: #777777; border:3px; border-style:solid; padding: 1em; white-space: pre-wrap;">{{content}}</p>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text" align="left">' +
  '                                                                                        <p style="font-size: 16px; color: #777777;">Data: {{date}}</p>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-p40t" align="center">' +
  '                                                                                        <h3 style="color: #333333;">Portal Bocayuva Advogados</h3>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                " +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" align="center">' +
  '                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p15t es-p35r es-p35l" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  "                                                                    " +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table cellpadding="0" cellspacing="0" class="es-content" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" esd-custom-block-id="7766" align="center">' +
  '                                        <table class="es-content-body" style="border-bottom:10px solid#f8f8f8;background-color:#f8f8f8;" width="600" cellspacing="0" cellpadding="0" bgcolor="#f8f8f8" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="600" valign="top" align="center">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-menu">' +
  '                                                                                        <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center">' +
  "                                                                                            <tbody>" +
  '                                                                                                <tr class="links-images-top">' +
  '                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l " style="padding-bottom: 30px; padding-top: 35px; " width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="color: #ffffff; font-size: 20px;" href="https://pt-br.facebook.com/bocayuvaadvogados/"><img src="https://www.flaticon.com/svg/static/icons/svg/21/21155.svg" alt title class="es-p5b" height="27" align="absmiddle"><br></a></td>' +
  '                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l " style="padding-bottom: 30px; padding-top: 35px; " width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="color: #ffffff; font-size: 20px;" href="https://br.linkedin.com/company/bocayuvaadvogados"><img src="https://www.flaticon.com/svg/static/icons/svg/142/142369.svg" alt title class="es-p5b" height="27" align="absmiddle"><br></a></td>' +
  '                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l " style="padding-bottom: 30px; padding-top: 35px; " width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="color: #ffffff; font-size: 20px;" href="https://www.bocayuvaadvogados.com.br/"><img src="https://www.flaticon.com/svg/static/icons/svg/151/151362.svg" alt title class="es-p5b" height="27" align="absmiddle"><br></a></td>' +
  "                                                                                                </tr>" +
  "                                                                                            </tbody>" +
  "                                                                                        </table>" +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  "                        " +
  "                    </td>" +
  "                </tr>" +
  "            </tbody>" +
  "        </table>" +
  "    </div>" +
  "</body>" +
  "" +
  "</html>"

export const linkProcessTemplate =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
  '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">' +
  "" +
  "<head>" +
  '    <meta charset="UTF-8">' +
  '    <meta content="width=device-width, initial-scale=1" name="viewport">' +
  '    <meta name="x-apple-disable-message-reformatting">' +
  '    <meta http-equiv="X-UA-Compatible" content="IE=edge">' +
  '    <meta content="telephone=no" name="format-detection">' +
  "    <title></title>" +
  "</head>" +
  "" +
  "<body>" +
  '    <div class="es-wrapper-color">' +
  '        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">' +
  "            <tbody>" +
  "                <tr>" +
  '                    <td class="esd-email-paddings" valign="top">' +
  '                        <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" esd-custom-block-id="7954" align="center">' +
  '                                        <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p15t es-p15b es-p10r es-p10l" align="left">' +
  "                                                                                                              " +
  '                                                        <table class="es-right" cellspacing="0" cellpadding="0" align="right">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="278" align="left">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  "                                                                                    " +
  "                                                                                </tr>" +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                        " +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">' +
  "                            <tbody>" +
  "                                <tr></tr>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" esd-custom-block-id="7799" align="center">' +
  '                                        <table class="es-header-body" style="background-color:#f8f8f8;" width="600" height="80" cellspacing="0" cellpadding="0" bgcolor="#f8f8f8" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p35t es-p40b es-p35r es-p35l" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="530" valign="top" align="center">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-m-txt-c" align="center">' +
  '                                                                                        <img src="https://i.imgur.com/i6B5tP8.png" class="center" style="margin-bottom: 10px;">' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" align="center">' +
  '                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p35t es-p25b es-p35r es-p35l" esd-custom-block-id="7811" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="530" valign="top" align="center">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-p20t es-p5b" align="left">' +
  '                                                                                        <h3 style="color: #333333;">Ol??, {{clientName}}!<br></h3>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-p15t es-p10b" align="left">' +
  '                                                                                        <p style="font-size: 16px; color: #777777;">O processo de n??mero {{lawsuitCode}} foi associado ?? sua conta no portal Bocayuva Adovogados.</p>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text" align="left">' +
  '                                                                                        <p style="font-size: 16px; color: #777777;">Data: {{date}}</p>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-text es-p40t" align="center">' +
  '                                                                                        <h3 style="color: #333333;">Portal Bocayuva Advogados</h3>' +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                                " +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" align="center">' +
  '                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure es-p15t es-p35r es-p35l" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  "                                                                    " +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  '                        <table cellpadding="0" cellspacing="0" class="es-content" align="center">' +
  "                            <tbody>" +
  "                                <tr>" +
  '                                    <td class="esd-stripe" esd-custom-block-id="7766" align="center">' +
  '                                        <table class="es-content-body" style="border-bottom:10px solid#f8f8f8;background-color:#f8f8f8;" width="600" cellspacing="0" cellpadding="0" bgcolor="#f8f8f8" align="center">' +
  "                                            <tbody>" +
  "                                                <tr>" +
  '                                                    <td class="esd-structure" align="left">' +
  '                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                            <tbody>" +
  "                                                                <tr>" +
  '                                                                    <td class="esd-container-frame" width="600" valign="top" align="center">' +
  '                                                                        <table width="100%" cellspacing="0" cellpadding="0">' +
  "                                                                            <tbody>" +
  "                                                                                <tr>" +
  '                                                                                    <td class="esd-block-menu">' +
  '                                                                                        <table class="es-menu" width="40%" cellspacing="0" cellpadding="0" align="center">' +
  "                                                                                            <tbody>" +
  '                                                                                                <tr class="links-images-top">' +
  '                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l " style="padding-bottom: 30px; padding-top: 35px; " width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="color: #ffffff; font-size: 20px;" href="https://pt-br.facebook.com/bocayuvaadvogados/"><img src="https://www.flaticon.com/svg/static/icons/svg/21/21155.svg" alt title class="es-p5b" height="27" align="absmiddle"><br></a></td>' +
  '                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l " style="padding-bottom: 30px; padding-top: 35px; " width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="color: #ffffff; font-size: 20px;" href="https://br.linkedin.com/company/bocayuvaadvogados"><img src="https://www.flaticon.com/svg/static/icons/svg/142/142369.svg" alt title class="es-p5b" height="27" align="absmiddle"><br></a></td>' +
  '                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l " style="padding-bottom: 30px; padding-top: 35px; " width="25.00%" bgcolor="transparent" align="center"><a target="_blank" style="color: #ffffff; font-size: 20px;" href="https://www.bocayuvaadvogados.com.br/"><img src="https://www.flaticon.com/svg/static/icons/svg/151/151362.svg" alt title class="es-p5b" height="27" align="absmiddle"><br></a></td>' +
  "                                                                                                </tr>" +
  "                                                                                            </tbody>" +
  "                                                                                        </table>" +
  "                                                                                    </td>" +
  "                                                                                </tr>" +
  "                                                                            </tbody>" +
  "                                                                        </table>" +
  "                                                                    </td>" +
  "                                                                </tr>" +
  "                                                            </tbody>" +
  "                                                        </table>" +
  "                                                    </td>" +
  "                                                </tr>" +
  "                                            </tbody>" +
  "                                        </table>" +
  "                                    </td>" +
  "                                </tr>" +
  "                            </tbody>" +
  "                        </table>" +
  "                        " +
  "                    </td>" +
  "                </tr>" +
  "            </tbody>" +
  "        </table>" +
  "    </div>" +
  "</body>" +
  "" +
  "</html>"

export const renewpasstemplate =
  "<!DOCTYPE html>" +
  "<html>" +
  '  <script type="text/javascript">' +
  "" +
  "    function checkForm(form)" +
  "    {" +
  '      if(form.email.value == "") {' +
  '        alert("Erro: Usu??rio Inexistente");' +
  "        form.username.focus();" +
  "        return false;" +
  "      }" +
  "  " +
  '      if(form.pass.value != "" && form.pass.value == form.passconfirm.value) {' +
  "        if(form.pass.value.length < 8) {" +
  '          alert("Erro: Sua senha deve conter no m??nimo 8 d??gitos!");' +
  "          form.pass.focus();" +
  "          return false;" +
  "        }" +
  "      } else {" +
  '        alert("Error: Confirma????o de senha inv??lida!");' +
  "        form.pass.focus();" +
  "        return false;" +
  "      }" +
  "      return true;" +
  "    }" +
  "  " +
  "  </script>" +
  "  <head>" +
  "    <title>Troca de Senha</title>" +
  '    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">' +
  '    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">' +
  "    <style>" +
  "      html, body {" +
  "      display: flex;" +
  "      justify-content: center;" +
  "      height: 100%;" +
  "      }" +
  "      body, div, h1, form, input, p { " +
  "      padding: 0;" +
  "      margin: 0;" +
  "      outline: none;" +
  "      font-family: Roboto, Arial, sans-serif;" +
  "      font-size: 16px;" +
  "      color: #666;" +
  "      }" +
  "      .center-logo {" +
  "        display: block;" +
  "        margin-left: auto;" +
  "        margin-right: auto;" +
  "        margin-top: 10px;" +
  "        margin-bottom: 20px;" +
  "        width: 50%;" +
  "        max-width:  154px; " +
  "        min-height: 40px;" +
  "    }" +
  "    h1 {" +
  "      padding: 10px 0;" +
  "      font-size: 32px;" +
  "      font-weight: 300;" +
  "      text-align: center;" +
  "      }" +
  "      h2 {" +
  "      padding: 10px 0;" +
  "      font-size: 16px;" +
  "      font-weight: 300;" +
  "      text-align: center;" +
  "      }" +
  "      p {" +
  "      font-size: 12px;" +
  "      }" +
  "      hr {" +
  "      color: #a9a9a9;" +
  "      opacity: 0.3;" +
  "      }" +
  "      .main-block {" +
  "      max-width: 490px; " +
  "      min-height: 420px; " +
  "      padding: 10px 0;" +
  "      margin: auto;" +
  "      border-radius: 5px; " +
  "      border: solid 1px #ccc;" +
  "      box-shadow: 1px 2px 5px rgba(0,0,0,.31); " +
  "      background: #ebebeb; " +
  "      }" +
  "      form {" +
  "      margin: 0 30px;" +
  "      }" +
  "      .account-type, .gender {" +
  "      margin: 15px 0;" +
  "      }" +
  "      input[type=radio] {" +
  "      display: none;" +
  "      }" +
  "      label#icon {" +
  "      margin: 0;" +
  "      border-radius: 5px 0 0 5px;" +
  "      }" +
  "      label.radio {" +
  "      position: relative;" +
  "      display: inline-block;" +
  "      padding-top: 4px;" +
  "      margin-right: 20px;" +
  "      text-indent: 30px;" +
  "      overflow: visible;" +
  "      cursor: pointer;" +
  "      }" +
  "      label.radio:before {" +
  '      content: "";' +
  "      position: absolute;" +
  "      top: 2px;" +
  "      left: 0;" +
  "      width: 20px;" +
  "      height: 20px;" +
  "      border-radius: 50%;" +
  "      background: #0f1c66;" +
  "      }" +
  "      label.radio:after {" +
  '      content: "";' +
  "      position: absolute;" +
  "      width: 9px;" +
  "      height: 4px;" +
  "      top: 8px;" +
  "      left: 4px;" +
  "      border: 3px solid #fff;" +
  "      border-top: none;" +
  "      border-right: none;" +
  "      transform: rotate(-45deg);" +
  "      opacity: 0;" +
  "      }" +
  "      input[type=radio]:checked + label:after {" +
  "      opacity: 1;" +
  "      }" +
  "      input[type=text], input[type=password] {" +
  "      width: calc(100% - 57px);" +
  "      height: 36px;" +
  "      margin: 13px 0 0 -5px;" +
  "      padding-left: 10px; " +
  "      border-radius: 0 5px 5px 0;" +
  "      border: solid 1px #cbc9c9; " +
  "      box-shadow: 1px 2px 5px rgba(0,0,0,.09); " +
  "      background: #fff; " +
  "      }" +
  "      #icon {" +
  "      display: inline-block;" +
  "      padding: 9.3px 15px;" +
  "      box-shadow: 1px 2px 5px rgba(0,0,0,.09); " +
  "      background: #030929;" +
  "      color: #fff;" +
  "      text-align: center;" +
  "      }" +
  "      .btn-block {" +
  "      margin-top: 10px;" +
  "      text-align: center;" +
  "      }" +
  "      button {" +
  "      width: 100%;" +
  "      padding: 10px 0;" +
  "      margin: 10px auto;" +
  "      border-radius: 5px; " +
  "      border: none;" +
  "      background: #030929; " +
  "      font-size: 14px;" +
  "      font-weight: 600;" +
  "      color: #fff;" +
  "      }" +
  "      button:hover {" +
  "      background: #030929;" +
  "      }" +
  "    </style>" +
  "  </head>" +
  "  <body>" +
  '    <div class="main-block">' +
  '     <img src="{{logo_url}}" class="center-logo"/>' +
  "      <h1>Altera????o de Senha</h1>" +
  '      <form method="POST" action="{{site_url}}/api/user/renewpass" onsubmit="return checkForm(this);">' +
  "        " +
  '        <label id="icon" for="email"><i class="fas fa-user"></i></label>' +
  '        <input type="text" name="email" id="email"  value="{{clientEmail}}" readonly/>' +
  "        " +
  '        <label id="icon" for="pass"><i class="fas fa-unlock"></i></label>' +
  '        <input type="password" name="pass" id="pass" placeholder="Senha" required/>' +
  "        " +
  '        <label id="icon" for="pass"><i class="fas fa-unlock"></i></label>' +
  '        <input type="password" name="passconfirm" id="passconfirm" placeholder="Confirma????o de senha" required/>' +
  "        " +
  '        <div class="btn-block">' +
  "        <p>Caso voc?? tenha problemas para recuperar sua senha, entre em contato com o escrit??rio.</p>" +
  '        <button type="submit">Enviar</button>' +
  "        </div>" +
  "      " +
  "      </form>" +
  "    </div>" +
  "  </body>" +
  "</html>"

export const renewPassMailTemplate =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
  '<html xmlns="http://www.w3.org/1999/xhtml">' +
  "<head>" +
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
  '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
  "  <title>Bocayuva Advogados</title>" +
  '  <style type="text/css" rel="stylesheet" media="all">' +
  "    /* Base ------------------------------ */" +
  "    *:not(br):not(tr):not(html) {" +
  "      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" +
  "      -webkit-box-sizing: border-box;" +
  "      box-sizing: border-box;" +
  "    }" +
  "    body {" +
  "      width: 100% !important;" +
  "      height: 100%;" +
  "      margin: 0;" +
  "      line-height: 1.4;" +
  "      background-color: #F5F7F9;" +
  "      color: #839197;" +
  "      -webkit-text-size-adjust: none;" +
  "    }" +
  "    a {" +
  "      color: green;" +
  "    }" +
  "" +
  "    /* Layout ------------------------------ */" +
  "    .email-wrapper {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "      background-color: #F5F7F9;" +
  "    }" +
  "    .email-content {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "    }" +
  "" +
  "    /* Masthead ----------------------- */" +
  "    .email-masthead {" +
  "      padding: 25px 0;" +
  "      text-align: center;" +
  "    }" +
  "    .email-masthead_logo {" +
  "      max-width: 400px;" +
  "      border: 0;" +
  "    }" +
  "    .email-masthead_name {" +
  "      font-size: 16px;" +
  "      font-weight: bold;" +
  "      color: #839197;" +
  "      text-decoration: none;" +
  "      text-shadow: 0 1px 0 white;" +
  "    }" +
  "" +
  "    /* Body ------------------------------ */" +
  "    .email-body {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "      border-top: 1px solid #E7EAEC;" +
  "      border-bottom: 1px solid #E7EAEC;" +
  "      background-color: #FFFFFF;" +
  "    }" +
  "    .email-body_inner {" +
  "      width: 570px;" +
  "      margin: 0 auto;" +
  "      padding: 0;" +
  "    }" +
  "    .email-footer {" +
  "      width: 570px;" +
  "      margin: 0 auto;" +
  "      padding: 0;" +
  "      text-align: center;" +
  "    }" +
  "    .email-footer p {" +
  "      color: #839197;" +
  "    }" +
  "    .body-action {" +
  "      width: 100%;" +
  "      margin: 30px auto;" +
  "      padding: 0;" +
  "      text-align: center;" +
  "    }" +
  "    .body-sub {" +
  "      margin-top: 25px;" +
  "      padding-top: 25px;" +
  "      border-top: 1px solid #E7EAEC;" +
  "    }" +
  "    .content-cell {" +
  "      padding: 35px;" +
  "    }" +
  "    .align-right {" +
  "      text-align: right;" +
  "    }" +
  "" +
  "    /* Type ------------------------------ */" +
  "    h1 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 19px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    h2 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 16px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    h3 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 14px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    p {" +
  "      margin-top: 0;" +
  "      color: #839197;" +
  "      font-size: 16px;" +
  "      line-height: 1.5em;" +
  "      text-align: left;" +
  "    }" +
  "    p.sub {" +
  "      font-size: 12px;" +
  "    }" +
  "    p.center {" +
  "      text-align: center;" +
  "    }" +
  "" +
  "    /* Buttons ------------------------------ */" +
  "    .button {" +
  "      display: inline-block;" +
  "      width: 200px;" +
  "      background-color: #414EF9;" +
  "      border-radius: 3px;" +
  "      color: #ffffff;" +
  "      font-size: 15px;" +
  "      line-height: 45px;" +
  "      text-align: center;" +
  "      text-decoration: none;" +
  "      -webkit-text-size-adjust: none;" +
  "      mso-hide: all;" +
  "    }" +
  "    .button--green {" +
  "      background-color: #28DB67;" +
  "    }" +
  "    .button--red {" +
  "      background-color: #FF3665;" +
  "    }" +
  "    .button--blue {" +
  "      background-color: #e0cf10;" +
  "      font-size: 15px;" +
  "      color:white;" +
  "    }" +
  "    .center {" +
  "      display: block;" +
  "      margin-left: auto;" +
  "      margin-right: auto;" +
  "    " +
  "}" +
  "" +
  "    /*Media Queries ------------------------------ */" +
  "    @media only screen and (max-width: 600px) {" +
  "      .email-body_inner," +
  "      .email-footer {" +
  "        width: 100% !important;" +
  "      }" +
  "    }" +
  "    @media only screen and (max-width: 500px) {" +
  "      .button {" +
  "        width: 100% !important;" +
  "      }" +
  "    }" +
  "  </style>" +
  "</head>" +
  "<body>" +
  '  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">' +
  "    <tr>" +
  '      <td align="center">' +
  '        <table class="email-content" width="100%" cellpadding="0" cellspacing="0">' +
  "          <!-- Logo -->" +
  "          <tr>" +
  '            <td class="email-masthead">' +
  '              <a class="email-masthead_name"> <img src="https://i.imgur.com/i6B5tP8.png" class="center"></a>' +
  "            </td>" +
  "          </tr>" +
  "          <!-- Email Body -->" +
  "          <tr>" +
  '            <td class="email-body" width="100%">' +
  '              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">' +
  "                <!-- Body content -->" +
  "                <tr>" +
  '                  <td class="content-cell">' +
  "                    <h1>Recupera????o de Senha!</h1>" +
  "                    <p>Clique no bot??o abaixo para recuperar a sua senha de acesso ao portal Bocayuva Advogados! Caso voc?? n??o tenha solicitado a troca de senha, ignore este e-mail!</p>" +
  "                    <!-- Action -->" +
  '                    <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0">' +
  "                      <tr>" +
  '                        <td align="center">' +
  "                          <div>" +
  '                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{action_url}}" style="height:45px;v-text-anchor:middle;width:200px;" arcsize="7%" stroke="f" fill="t">' +
  '                            <v:fill type="tile" color="#414EF9" />' +
  "                            <w:anchorlock/>" +
  '                            <center style="color:#ffffff;font-family:sans-serif;font-size:15px;">Verify Email</center>' +
  "                          </v:roundrect><![endif]-->" +
  '                            <a href="{{action_url}}" class="button button--red"><b>Recuperar Senha</b></a>' +
  "                          </div>" +
  "                        </td>" +
  "                      </tr>" +
  "                    </table>" +
  "                    <p>Muito obrigado,<br>Equipe Bocayuva Advogados</p>" +
  "                    <!-- Sub copy -->" +
  '                    <table class="body-sub">' +
  "                      <tr>" +
  "                        <td>" +
  "                          </p>" +
  "                        </td>" +
  "                      </tr>" +
  "                    </table>" +
  "                  </td>" +
  "                </tr>" +
  "              </table>" +
  "            </td>" +
  "          </tr>" +
  "          <tr>" +
  "            <td>" +
  '              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0">' +
  "                <tr>" +
  '                  <td class="content-cell">' +
  '                    <p class="sub center">' +
  "                      Bocayuva Advogados" +
  "                      <br>Bras??lia, DF" +
  "                    </p>" +
  "                  </td>" +
  "                </tr>" +
  "              </table>" +
  "            </td>" +
  "          </tr>" +
  "        </table>" +
  "      </td>" +
  "    </tr>" +
  "  </table>" +
  "</body>" +
  "</html>"

export const renewPassMailCodeTemplate =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
  '<html xmlns="http://www.w3.org/1999/xhtml">' +
  "<head>" +
  '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
  '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
  "  <title>Bocayuva Advogados</title>" +
  '  <style type="text/css" rel="stylesheet" media="all">' +
  "    /* Base ------------------------------ */" +
  "    *:not(br):not(tr):not(html) {" +
  "      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" +
  "      -webkit-box-sizing: border-box;" +
  "      box-sizing: border-box;" +
  "    }" +
  "    body {" +
  "      width: 100% !important;" +
  "      height: 100%;" +
  "      margin: 0;" +
  "      line-height: 1.4;" +
  "      background-color: #F5F7F9;" +
  "      color: #839197;" +
  "      -webkit-text-size-adjust: none;" +
  "    }" +
  "    a {" +
  "      color: green;" +
  "    }" +
  "" +
  "    /* Layout ------------------------------ */" +
  "    .email-wrapper {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "      background-color: #F5F7F9;" +
  "    }" +
  "    .email-content {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "    }" +
  "" +
  "    /* Masthead ----------------------- */" +
  "    .email-masthead {" +
  "      padding: 25px 0;" +
  "      text-align: center;" +
  "    }" +
  "    .email-masthead_logo {" +
  "      max-width: 400px;" +
  "      border: 0;" +
  "    }" +
  "    .email-masthead_name {" +
  "      font-size: 16px;" +
  "      font-weight: bold;" +
  "      color: #839197;" +
  "      text-decoration: none;" +
  "      text-shadow: 0 1px 0 white;" +
  "    }" +
  "" +
  "    /* Body ------------------------------ */" +
  "    .email-body {" +
  "      width: 100%;" +
  "      margin: 0;" +
  "      padding: 0;" +
  "      border-top: 1px solid #E7EAEC;" +
  "      border-bottom: 1px solid #E7EAEC;" +
  "      background-color: #FFFFFF;" +
  "    }" +
  "    .email-body_inner {" +
  "      width: 570px;" +
  "      margin: 0 auto;" +
  "      padding: 0;" +
  "    }" +
  "    .email-footer {" +
  "      width: 570px;" +
  "      margin: 0 auto;" +
  "      padding: 0;" +
  "      text-align: center;" +
  "    }" +
  "    .email-footer p {" +
  "      color: #839197;" +
  "    }" +
  "    .body-action {" +
  "      width: 100%;" +
  "      margin: 30px auto;" +
  "      padding: 0;" +
  "      text-align: center;" +
  "    }" +
  "    .body-sub {" +
  "      margin-top: 25px;" +
  "      padding-top: 25px;" +
  "      border-top: 1px solid #E7EAEC;" +
  "    }" +
  "    .content-cell {" +
  "      padding: 35px;" +
  "    }" +
  "    .align-right {" +
  "      text-align: right;" +
  "    }" +
  "" +
  "    /* Type ------------------------------ */" +
  "    h1 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 19px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    h2 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 16px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    h3 {" +
  "      margin-top: 0;" +
  "      color: #292E31;" +
  "      font-size: 14px;" +
  "      font-weight: bold;" +
  "      text-align: left;" +
  "    }" +
  "    p {" +
  "      margin-top: 0;" +
  "      color: #839197;" +
  "      font-size: 16px;" +
  "      line-height: 1.5em;" +
  "      text-align: left;" +
  "    }" +
  "    p.sub {" +
  "      font-size: 12px;" +
  "    }" +
  "    p.center {" +
  "      text-align: center;" +
  "    }" +
  "" +
  "    /* Buttons ------------------------------ */" +
  "    .button {" +
  "      display: inline-block;" +
  "      width: 200px;" +
  "      background-color: #414EF9;" +
  "      border-radius: 3px;" +
  "      color: #ffffff;" +
  "      font-size: 15px;" +
  "      line-height: 45px;" +
  "      text-align: center;" +
  "      text-decoration: none;" +
  "      -webkit-text-size-adjust: none;" +
  "      mso-hide: all;" +
  "    }" +
  "    .button--green {" +
  "      background-color: #28DB67;" +
  "    }" +
  "    .button--red {" +
  "      background-color: #FF3665;" +
  "    }" +
  "    .button--blue {" +
  "      background-color: #e0cf10;" +
  "      font-size: 15px;" +
  "      color:white;" +
  "    }" +
  "    .center {" +
  "      display: block;" +
  "      margin-left: auto;" +
  "      margin-right: auto;" +
  "    " +
  "}" +
  "" +
  "    /*Media Queries ------------------------------ */" +
  "    @media only screen and (max-width: 600px) {" +
  "      .email-body_inner," +
  "      .email-footer {" +
  "        width: 100% !important;" +
  "      }" +
  "    }" +
  "    @media only screen and (max-width: 500px) {" +
  "      .button {" +
  "        width: 100% !important;" +
  "      }" +
  "    }" +
  "  </style>" +
  "</head>" +
  "<body>" +
  '  <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">' +
  "    <tr>" +
  '      <td align="center">' +
  '        <table class="email-content" width="100%" cellpadding="0" cellspacing="0">' +
  "          <!-- Logo -->" +
  "          <tr>" +
  '            <td class="email-masthead">' +
  '              <a class="email-masthead_name"> <img src="https://i.imgur.com/i6B5tP8.png" class="center"></a>' +
  "            </td>" +
  "          </tr>" +
  "          <!-- Email Body -->" +
  "          <tr>" +
  '            <td class="email-body" width="100%">' +
  '              <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">' +
  "                <!-- Body content -->" +
  "                <tr>" +
  '                  <td class="content-cell">' +
  "                    <h1>Recupera????o de Senha!</h1>" +
  "                    <p>Utilize o c??digo abaixo para recuperar a sua senha de acesso ao portal Bocayuva Advogados! O c??digo tem validade de 1 (uma) hora. Caso voc?? n??o tenha solicitado a troca de senha, ignore este e-mail!</p>" +
  "                    <!-- Action -->" +
  '                    <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0">' +
  "                      <tr>" +
  '                        <td align="center">' +
  "                          <div>" +
  '                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{action_url}}" style="height:45px;v-text-anchor:middle;width:200px;" arcsize="7%" stroke="f" fill="t">' +
  '                            <v:fill type="tile" color="#414EF9" />' +
  "                            <w:anchorlock/>" +
  '                            <center style="color:#ffffff;font-family:sans-serif;font-size:15px;">Verify Email</center>' +
  "                          </v:roundrect><![endif]-->" +
  '                            <a href="#" class="button button--red"><b>{{renew_code}}</b></a>' +
  "                          </div>" +
  "                        </td>" +
  "                      </tr>" +
  "                    </table>" +
  "                    <p>Muito obrigado,<br>Equipe Bocayuva Advogados</p>" +
  "                    <!-- Sub copy -->" +
  '                    <table class="body-sub">' +
  "                      <tr>" +
  "                        <td>" +
  "                          </p>" +
  "                        </td>" +
  "                      </tr>" +
  "                    </table>" +
  "                  </td>" +
  "                </tr>" +
  "              </table>" +
  "            </td>" +
  "          </tr>" +
  "          <tr>" +
  "            <td>" +
  '              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0">' +
  "                <tr>" +
  '                  <td class="content-cell">' +
  '                    <p class="sub center">' +
  "                      Bocayuva Advogados" +
  "                      <br>Bras??lia, DF" +
  "                    </p>" +
  "                  </td>" +
  "                </tr>" +
  "              </table>" +
  "            </td>" +
  "          </tr>" +
  "        </table>" +
  "      </td>" +
  "    </tr>" +
  "  </table>" +
  "</body>" +
  "</html>"

export const contractText =
  "<!doctype html>" +
  '<html lang="pt">' +
  "<head>" +
  "    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>" +
  "    <style>" +
  "        body {" +
  "            font-family: 'Roboto';font-size: 15px;" +
  "            background-image: url('{{siteUrl}}/api/img/BackgroundBody.jpg');" +
  "        }" +
  "        div {" +
  "            text-align: justify;" +
  "            text-justify: inter-word;" +
  "            font-family: Arial;" +
  "        }" +
  "        * {" +
  "            box-sizing: border-box;" +
  "        }   " +
  "        .column {" +
  "            float: left;" +
  "            width: 50%;" +
  "            padding: 10px;" +
  "            height: 100px;" +
  "        } " +
  "        .row:after {" +
  '            content: "";' +
  "            display: table;" +
  "            clear: both;" +
  "        }" +
  "    </style>" +
  '    <meta charset="utf-8">' +
  "</head>" +
  "<body>" +
  '    <div style="text-align: right; padding-right: 10%; padding-top: 5%;" ><img src="{{siteUrl}}/api/img/Logo.png" alt="BCA" width=20% height=20%></div>' +
  '    <div style="padding-right: 10%; padding-left: 10%; padding-top: 3%;">' +
  "        <h3><center>CONTRATO DE PRESTA????O DE SERVI??OS ADVOCAT??CIOS</center></h3>" +
  '        <p><span style="font-weight: 400;"><b>{{name}}</b>, <b>{{nacionalidade}}</b>, <b>{{estadocivil}}</b>, inscrito no CPF: <b>{{cpf}}</b>, RG: <b>{{rg}}</b>, residente e domiciliado no endere??o: <b>{{endereco}}</b>, CEP: <b>{{cep}}</b> e de outro lado, como prestador de servi??o/contratado/escrit??rio, assim doravante indicado, o escrit??rio de Advocacia <b>BOCAYUVA & ADVOGADOS ASSOCIADOS</b>  S/S, Pessoa Jur??dica registrada no CNPJ n?? 22.588.047/0001-50, inscrita na OAB/DF n?? 2493/2015, neste ato representado por sua s??cia <b>MARCELA CARVALHO BOCAYUVA</b>, brasileira, solteira, advogada, inscrita na OAB/DF 41.954, CPF: 021.164.381-52, e <b>LUIS FELIPE CARVALHO BOCAYUVA</b>, brasileiro, solteiro, advogado, inscrito na OAB/DF sob o n?? 50829, CPF 021.164.431-56, com endere??o profissional no SRTVS Quadra 701, BLOCO O, SALAS 430-433, Edif??cio Multiempresarial, Asa Sul, Bras??lia ??? DF, CEP 70340-000, Telefones:  (61)3032-8936, (61)99192-9999, (61)98383-1993, e-mail contato@bocayuvaadvogados.com.br ajustam entre si, com fulcro no artigo 22 da Lei n?? 8.906/94, mediante as seguintes cl??usulas e condi????es:</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Primeira</b> - O ESCRIT??RIO compromete-se, em cumprimento ao mandato recebido, a postular o pedido de CONCESS??O, RESTABELECIMENTO ou MANUTEN????O DE BENEF??CIO, perante a Justi??a Federal, de interesse do Contratante.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Segunda</b> - O (a) CLIENTE, que reconhece j?? haver recebido a Consultoria e orienta????o preventiva comportamental e jur??dica para a consecu????o dos servi??os, fornecer?? ao ESCRIT??RIO os documentos e meios necess??rios ?? comprova????o processual do seu pretendido direito, bem como pagar?? as despesas judiciais que decorrem da causa.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Terceira</b> - Em remunera????o pelos servi??os profissionais ora contratados ser??o devidos pelo CLIENTE, a partir do tr??nsito em julgado do Acordo, da Senten??a ou Ac??rd??o Procedente, <b><u>o percentual de 25% (vinte e cinco por cento) do valor bruto recebido a t??tulo de atrasados ou retroativos, inclusive sobre o CP</u></b> ??? Complemento Positivo, a serem pagos atrav??s de RPV (Requisi????o de Pequeno Valor) ou PRECAT??RIO.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo ??nico</b> - No caso de composi????o amig??vel e ainda na esfera administrativa, os honor??rios ser??o devidos na mesma propor????o.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Quarta</b> - Ser??o ainda devidos honor??rios advocat??cios, vinculados ?? concess??o ou manuten????o do benef??cio previdenci??rio, por meio de tutela antecipada deferida em qualquer fase processual, ou cumprimento do julgado/senten??a, ser??o pagos pelo cliente ao escrit??rio, <b><u>20% (vinte por cento) do valor bruto mensal do benef??cio implantado pelo prazo de 12 (doze) meses.</u></b></span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Primeiro</b> - Os honor??rios contratuais ser??o fixados no valor m??nimo de R$ 3.000,00 (tr??s mil reais) caso o percentual de 25% do valor do recebido pelo CLIENTE seja aqu??m da quantia acima referenciada. Caso superior, permanecer?? o valor de 25%;</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo segundo</b> - O CLIENTE autoriza o desconto das tarifas banc??rias nos boletos mensais e o levantamento dos honor??rios advocat??cios contratuais em alvar?? ou RPV apartados, na forma do artigo 22, ??4??, da Lei 8.906/1994 (EAOAB) em nome do ESCRIT??RIO. <b>Autoriza tamb??m, no ato do pagamento dos valores a t??tulo de atrasados, por meio de RPV, o desconto da totalidade das parcelas mensais vencidas e vincendas, mencionada na cl??usula quarta.</b></span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo terceiro</b> -  O n??o pagamento de qualquer parcela no seu vencimento, importar?? no vencimento integral e antecipado de todas as parcelas vincendas, sujeitando o CLIENTE, al??m da execu????o do presente instrumento, ao pagamento do valor integral do d??bito, sobre o qual incidir?? a aplica????o de multa de 10%, juros de mora de 1% ao m??s e corre????o monet??ria pelo ??ndice INPC desde o primeiro vencimento, custas processuais e honor??rios advocat??cios na base de 20% sobre o valor total do d??bito.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Quinta</b> - Na hip??tese de revoga????o do mandato outorgado ao <b>ESCRIT??RIO</b> para a presta????o do servi??o objeto deste contrato ap??s o ajuizamento da a????o, ter?? o escrit??rio direito a ao recebimento integral do valor dos honor??rios advocat??cios contratuais e de sucumb??ncia. </span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo ??nico</b> - O presente contrato obriga os sucessores, herdeiros e legat??rios do cliente ao seu fiel cumprimento.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula S??tima</b> - Os honor??rios de condena????o (sucumb??ncia), caso sejam fixados, pertencer??o EXCLUSIVAMENTE ao ESCRIT??RIO, sem exclus??o dos que ora s??o contratados, de conformidade com os artigos 23 da Lei n?? 8.906/94 e 35, par??grafo 1??, do C??digo de ??tica e Disciplina da Ordem dos Advogados do Brasil.</span></p>' +
  '        <p><span style="font-weight: 400;">Elegem as partes o foro da Circunscri????o judici??ria de Bras??lia-DF, para dirimir controv??rsias que possam surgir do presente contrato.</span></p>' +
  '        <p><span style="font-weight: 400;">E por estarem assim justos e contratados, saibam as partes que se trata de um t??tulo executivo nos termos do artigo Art. 24. Do EOAB e 784, III do C??digo de Processo Civil, portanto, assinam o presente em duas vias de igual forma e teor, para que possa produzir todos os seus efeitos de direito.</span></p>' +
  '        <p><span style="font-weight: 400;"><center>Bras??lia, <b>{{currentDate}}</b>.</center></span></p>' +
  "    </div>" +
  '    <div class="row">' +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratante</p>" +
  "            </center>" +
  "        </div>" +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratado</p>" +
  "            </center>" +
  "        </div>" +
  "    </div>" +
  '    <div style="text-align: center;">' +
  '        <p style="color: goldenrod; margin-top:0 px;">' +
  "            ______________________________________________</p>" +
  '        <p style="padding-bottom: 50px;"><span>SRTVS Quadra 701 ??? bloco O ??? salas 430/433 ??? Multiempresarial ??? Bras??lia/DF ??? 70340-000</span>' +
  '            <br><span style="color: blue;"><u>www.bocayuvaadvogados.com.br</u> ???' +
  "                <u>contato@bocayuvaadvogados.com.br</u></span>" +
  "            <br><span>(61) 3032-8936 / (61) 3032-8933<br><br></span>" +
  "        </p>" +
  "    </div>" +
  "</body>" +
  "</html>"

export const aceiteContract =
  "<!doctype html>" +
  '<html lang="pt">' +
  "<head>" +
  "<style>" +
  "        body {" +
  "            font-family: 'Roboto';font-size: 15px;" +
  "            background-image: url('{{siteUrl}}/api/img/BackgroundBody.jpg');" +
  "        }" +
  "        div {" +
  "            text-align: justify;" +
  "            text-justify: inter-word;" +
  "            font-family: Arial;" +
  "        }" +
  "        * {" +
  "            box-sizing: border-box;" +
  "        }   " +
  "        .column {" +
  "            float: left;" +
  "            width: 50%;" +
  "            padding: 10px;" +
  "            height: 100px;" +
  "        } " +
  "        .row:after {" +
  '            content: "";' +
  "            display: table;" +
  "            clear: both;" +
  "        }" +
  "    </style>" +
  '    <meta charset="utf-8">' +
  "</head>" +
  '<body background="BackgroundBody.jpg">' +
  '    <div style="text-align: right; padding-right: 10%; padding-top: 5%;" ><img src="{{siteUrl}}/api/img/Logo.png" alt="BCA" width=20% height=20%></div>' +
  '    <div style="padding-right: 10%; padding-left: 10%; padding-top: 3%;">' +
  "        <h3><center>CONTRATO DE PRESTA????O DE SERVI??OS ADVOCAT??CIOS</center></h3>" +
  '        <p><span style="font-weight: 400;">Pelo presente instrumento particular, que entre si fazem, de um lado como <b>CLIENTE</b> e assim doravante indicado, <b>{{name}}</b>, <b>{{nacionalidade}}</b>, <b>{{estadocivil}}</b>, portador do RG n?? <b>{{rg}}</b>, CPF n?? <b>{{cpf}}</b>, residente e domiciliado no endere??o <b>{{endereco}}</b>, CEP <b>{{cep}}</b>, e de outro lado, como <b>ESCRIT??RIO</b>, assim doravante indicado, o escrit??rio de Advocacia <b>BOCAYUVA & ADVOGADOS ASSOCIADOS S/S</b>, Pessoa Jur??dica registrada no CNPJ n?? 22.588.047/0001-50, inscrita na OAB/DF n?? 2493/2015, neste ato representado por sua s??cia <b>MARCELA CARVALHO BOCAYUVA</b>, brasileira, solteira, advogada, inscrita na OAB/DF 41.954, CPF: 021.164.381-52, e <b>LUIS FELIPE CARVALHO BOCAYUVA</b>, brasileiro, solteiro, advogado, inscrito na OAB/DF sob o n?? 50829, CPF 021.164.431-56, com endere??o profissional no SRTVS Quadra 701, Edif??cio Multiempresarial, Salas 430-433, CEP 70340-000, Telefones: (61)3032-8936, (61)9192-9999, (61)8383-1993, e-mail contato@bocayuvaadvogados.com.br, ajustam entre si, com fulcro no artigo 22 da Lei n?? 8.906/94, mediante as seguintes cl??usulas e condi????es:</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Primeira</b> - O <b>ESCRIT??RIO</b> compromete-se, em cumprimento ao acordo celebrado, prestar servi??os de <b>CONSULTORIA DE DIREITO PREVIDENCI??RIO</b>, de interesse do Contratante.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Segunda</b> - O (a) <b>CLIENTE</b>, reconhece j?? receber orienta????o preventiva comportamental para a consecu????o dos servi??os, bem como fornecer?? ao ESCRIT??RIO os documentos e meios necess??rios ?? comprova????o processual do seu pretendido direito.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Terceira</b> - Em remunera????o pelos servi??os profissionais ora contratados ser??o devidos pelo <b>CLIENTE</b>, a partir da imediata contrata????o, o valor de R$200,00 (duzentos reais).</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Primeiro</b> - A respectiva presta????o de servi??os s?? ser?? realizada ap??s o efetivo recebimento dos valores pactuados.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Segundo</b> - Os valores contratados n??o abarcam qualquer possibilidade de postula????o judicial ou eventual requerimento administrativo perante o INSS.</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Quarta</b> - O presente contrato obriga os sucessores, herdeiros e legat??rios do cliente ao seu fiel cumprimento.</u></b></span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Primeiro</b> - Os honor??rios contratuais ser??o fixados no valor m??nimo de R$ 3.000,00 (tr??s mil reais) caso o percentual de 25% do valor do recebido pelo CLIENTE seja aqu??m da quantia acima referenciada. Caso superior, permanecer?? o valor de 25%;</span></p>' +
  '        <p><span style="font-weight: 400;"><b>Par??grafo segundo</b> - O CLIENTE autoriza o desconto das tarifas banc??rias nos boletos mensais e o levantamento dos honor??rios advocat??cios contratuais em alvar?? ou RPV apartados, na forma do artigo 22, ??4??, da Lei 8.906/1994 (EAOAB) em nome do ESCRIT??RIO. <b>Autoriza tamb??m, no ato do pagamento dos valores a t??tulo de atrasados, por meio de RPV, o desconto da totalidade das parcelas mensais vencidas e vincendas, mencionada na cl??usula quarta.</b></span></p>' +
  '        <p><span style="font-weight: 400;">Elegem as partes o foro da Circunscri????o judici??ria de Bras??lia-DF, para dirimir controv??rsias que possam surgir do presente contrato, podendo o Advogado optar pelo foro de resid??ncia do Contratante.</span></p>' +
  '        <p><span style="font-weight: 400;">E por estarem assim justos e contratados, saibam as partes que se trata de um t??tulo executivo nos termos do artigo Art. 24. Do EOAB e 784, II do C??digo de Processo Civil, portanto, assinam o presente em duas vias de igual forma e teor, para que possa produzir todos os seus efeitos de direito.</span></p>' +
  '        <p><span style="font-weight: 400;"><center>Bras??lia, {{currentDate}}.</center></span></p>' +
  "    </div>" +
  '    <div class="row">' +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratante</p>" +
  "            </center>" +
  "        </div>" +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratado</p>" +
  "            </center>" +
  "        </div>" +
  "    </div>" +
  '    <div style="text-align: center;">' +
  '        <p style="color: goldenrod; margin-top:0 px;">' +
  "            _____________________________________________</P>" +
  '        <p style="padding-bottom: 50px;"><span>SRTVS Quadra 701 ??? bloco O ??? salas 430/433 ??? Multiempresarial ??? Bras??lia/DF ??? 70340-000</span>' +
  '            <br><span style="color: blue;"><u>www.bocayuvaadvogados.com.br</u> ???' +
  "                <u>contato@bocayuvaadvogados.com.br</u></span>" +
  "            <br><span>(61) 3032-8936 / (61) 3032-8933<br><br></span></p>" +
  "    </div>" +
  "</body>" +
  "</html>"

export const contractTextMaternidade =
  "<!doctype html>" +
  '<html lang="pt">' +
  "<head>" +
  "    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>" +
  "    <style>" +
  "        body {" +
  "            font-family: 'Roboto';font-size: 15px;" +
  "            background-image: url('{{siteUrl}}/api/img/BackgroundBody.jpg');" +
  "        }" +
  "        div {" +
  "            text-align: justify;" +
  "            text-justify: inter-word;" +
  "            font-family: Arial;" +
  "        }" +
  "        * {" +
  "            box-sizing: border-box;" +
  "        }   " +
  "        .column {" +
  "            float: left;" +
  "            width: 50%;" +
  "            padding: 10px;" +
  "            height: 100px;" +
  "        } " +
  "        .row:after {" +
  '            content: "";' +
  "            display: table;" +
  "            clear: both;" +
  "        }" +
  "    </style>" +
  '    <meta charset="utf-8">' +
  "</head>" +
  "<body>" +
  '    <div style="text-align: right; padding-right: 10%; padding-top: 5%;" ><img src="{{siteUrl}}/api/img/Logo.png" alt="BCA" width=20% height=20%></div>' +
  '<div style="padding-right: 10%; padding-left: 10%; padding-top: 3%;">' +
  "        <h3>" +
  "            <center>CONTRATO DE PRESTA????O DE SERVI??OS ADVOCAT??CIOS</center>" +
  "        </h3>" +
  '        <p><span style="font-weight: 400;">Pelo presente instrumento particular, que entre si fazem, de um lado como' +
  "                cliente/contratante e assim doravante indicado, <b>{{name}}</b>, <b>{{nacionalidade}}</b>," +
  "                <b>{{estadocivil}}</b>, portador(a) do RG: <b>{{rg}}</b> <b>[client.RG ??rg??o]</b>, CPF: " +
  "                <b>{{cpf}}</b>, domiciliado(a) no(a) <b>{{endereco}}</b>, <b>{{cidade}}</b> -" +
  "                <b>{{estado}}</b>, CEP: <b>{{cep}}</b> telefone: <b>{{telefone}}</b>, e de outro lado, como" +
  "                prestador de servi??o/contratado/escrit??rio, assim doravante indicado, o escrit??rio de Advocacia" +
  "                <b>BOCAYUVA & ADVOGADOS ASSOCIADOS S/S</b>, Pessoa Jur??dica registrada no CNPJ n?? 22.588.047/0001-50," +
  "                inscrita na OAB/DF n?? 2493/2015, neste ato representado por sua s??cia <b>MARCELA CARVALHO BOCAYUVA</b>," +
  "                brasileira, solteira, advogada, inscrita na OAB/DF 41.954, CPF: 021.164.381-52, e <b>LUIS FELIPE" +
  "                    CARVALHO BOCAYUVA</b>, brasileiro, solteiro, advogado, inscrito na OAB/DF sob o n?? 50829, CPF" +
  "                021.164.431-56, com endere??o profissional no SRTVS Quadra 701, Edif??cio Multiempresarial, Salas 430-433," +
  "                Bras??lia ??? DF, CEP 70340-907, Telefones: (61) 3032-8936, (61) 9192-9999, (61) 8383-1993, e-mail" +
  "                contato@bocayuvaadvogados.com.br, ajustam entre si, com fulcro no artigo 22 da Lei n?? 8.906/94, mediante" +
  "                as seguintes cl??usulas e condi????es:</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Primeira</b> - O ESCRIT??RIO compromete-se, em cumprimento ao' +
  "                mandato recebido, perante a Justi??a Federal, de interesse do Contratante, para acompanhamento e" +
  "                ajuizamento de a????o previdenci??ria cujo objeto ?? pedido de <b>SAL??RIO MATERNIDADE.</b></span> </p>" +
  "" +
  "" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Segunda</b> - O (a) CLIENTE, que reconhece j?? haver recebido a' +
  "                Consultoria e orienta????o preventiva comportamental e jur??dica para a consecu????o dos servi??os, fornecer??" +
  "                ao ESCRIT??RIO os documentos e meios necess??rios ?? comprova????o processual do seu pretendido direito, bem" +
  "                como pagar?? as despesas judiciais que decorrem da causa.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Terceira</b> - Em remunera????o pelos servi??os profissionais ora' +
  "                contratados ser??o devidos pelo CLIENTE, a partir do tr??nsito em julgado do Acordo, da Senten??a ou" +
  "                Ac??rd??o Procedente, <b><u>o percentual de 25% (vinte e cinco por cento) do valor bruto recebido a t??tulo" +
  "                        de atrasados ou retroativos, inclusive sobre o CP</u></b> ??? Complemento Positivo, a serem pagos" +
  "                atrav??s de RPV (Requisi????o de Pequeno Valor) ou PRECAT??RIO.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Primeiro</b> - Os honor??rios contratuais ser??o fixados no valor' +
  "                m??nimo de R$ 1.200,00 (MIL E DUZENTOS REAIS) caso o percentual de 25% do valor do recebido pelo CLIENTE" +
  "                seja aqu??m da quantia acima referenciada. Caso superior, permanecer?? o percentual de 25%;</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Segundo</b> - A respectiva quita????o ser?? dada quando da emiss??o,' +
  "                pelo ESCRIT??RIO, da respectiva RPA- Recibo de Presta????o de Servi??o Aut??nomo, com quita????o total e/ou" +
  "                mediante recibo.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Terceiro</b> - O CLIENTE autoriza o desconto das tarifas' +
  "                banc??rias nos boletos mensais e o levantamento dos honor??rios advocat??cios contratuais em alvar?? ou RPV" +
  "                apartados, na forma do artigo 22, ??4??, da Lei 8.906/1994 (EAOAB) em nome do ESCRIT??RIO. <b>Autoriza" +
  "                    tamb??m, no ato do pagamento dos valores a t??tulo de atrasados, por meio de RPV, o desconto da" +
  "                    totalidade das parcelas mensais vencidas e vincendas, mencionada na cl??usula quarta.</b></span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Quarto</b> - No caso de composi????o amig??vel e ainda na esfera' +
  "                administrativa perante o INSS, os honor??rios ser??o devidos na mesma propor????o.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Quarta</b> - Considerar-se-??o vencidos e imediatamente exig??veis' +
  "                os honor??rios ora contratados a partir do quinto dia ??til do m??s subsequente ao m??s de" +
  "                vencimento.</u></b></span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo ??nico</b> - Pelo inadimplemento dos honor??rios contratuais' +
  "                expostos na Cl??usula Terceira, incidir??o juros morat??rios mensais de 1% (um por cento), corre????o" +
  "                monet??ria de indexador INPC e multa de 30% (trinta por cento), a t??tulo de cl??usula penal, sobre o valor" +
  "                de cada parcela devida e n??o adimplida;</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Quinta</b> - Na hip??tese de revoga????o do mandato outorgado ao' +
  "                <b>ESCRIT??RIO</b> para a presta????o do servi??o objeto deste contrato ap??s o ajuizamento da a????o, ter?? o" +
  "                escrit??rio direito ao valor cobrado pela tabela da OAB para ingresso da a????o previdenci??ria que equivale" +
  "                a 30URH, al??m de possuir direito ao recebimento integral do valor dos honor??rios advocat??cios" +
  "                contratuais e de sucumb??ncia. O presente contrato obriga os sucessores, herdeiros e legat??rios do" +
  "                cliente ao seu fiel cumprimento. </span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Sexta</b> - Os honor??rios de condena????o (sucumb??ncia), caso sejam' +
  "                fixados, pertencer??o EXCLUSIVAMENTE ao ESCRIT??RIO, sem exclus??o dos que ora s??o contratados, de" +
  "                conformidade com os artigos 23 da Lei n?? 8.906/94 e 35, par??grafo 1??, do C??digo de ??tica e Disciplina da" +
  "                Ordem dos Advogados do Brasil.</span></p>" +
  '        <p><span style="font-weight: 400;">Elegem as partes o foro da Circunscri????o judici??ria de Bras??lia-DF, para' +
  "                dirimir controv??rsias que possam surgir do presente contrato, podendo o Advogado optar pelo foro de" +
  "                resid??ncia do Contratante. </span></p>" +
  '        <p><span style="font-weight: 400;">E por estarem assim justos e contratados, saibam as partes que se trata de um' +
  "                t??tulo executivo nos termos do artigo Art. 24. Do EOAB e 585, II do C??digo de Processo Civil, portanto," +
  "                assinam o presente em duas vias de igual forma e teor, para que possa produzir todos os seus efeitos de" +
  "                direito.</span></p>" +
  '        <p><span style="font-weight: 400;">' +
  "                <center>Bras??lia, <b>{{currentDate}}</b>.</center>" +
  "            </span></p>" +
  "    </div>" +
  '    <div class="row">' +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratante</p>" +
  "            </center>" +
  "        </div>" +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratado</p>" +
  "            </center>" +
  "        </div>" +
  "    </div>" +
  '    <div style="text-align: center;">' +
  '        <p style="color: goldenrod; margin-top:0 px;">' +
  "            ______________________________________________</p>" +
  '        <p style="padding-bottom: 50px;"><span>SRTVS Quadra 701 ??? bloco O ??? salas 430/433 ??? Multiempresarial ??? Bras??lia/DF ??? 70340-000</span>' +
  '            <br><span style="color: blue;"><u>www.bocayuvaadvogados.com.br</u> ???' +
  "                <u>contato@bocayuvaadvogados.com.br</u></span>" +
  "            <br><span>(61) 3032-8936 / (61) 3032-8933<br><br></span>" +
  "        </p>" +
  "    </div>" +
  "</body>" +
  "</html>"

export const contractTextRevisao =
  "<!doctype html>" +
  '<html lang="pt">' +
  "<head>" +
  "    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>" +
  "    <style>" +
  "        body {" +
  "            font-family: 'Roboto';font-size: 15px;" +
  "            background-image: url('{{siteUrl}}/api/img/BackgroundBody.jpg');" +
  "        }" +
  "        div {" +
  "            text-align: justify;" +
  "            text-justify: inter-word;" +
  "            font-family: Arial;" +
  "        }" +
  "        * {" +
  "            box-sizing: border-box;" +
  "        }   " +
  "        .column {" +
  "            float: left;" +
  "            width: 50%;" +
  "            padding: 10px;" +
  "            height: 100px;" +
  "        } " +
  "        .row:after {" +
  '            content: "";' +
  "            display: table;" +
  "            clear: both;" +
  "        }" +
  "    </style>" +
  '    <meta charset="utf-8">' +
  "</head>" +
  "<body>" +
  '    <div style="text-align: right; padding-right: 10%; padding-top: 5%;" ><img src="{{siteUrl}}/api/img/Logo.png" alt="BCA" width=20% height=20%></div>' +
  '<div style="padding-right: 10%; padding-left: 10%; padding-top: 3%;">' +
  "        <h3>" +
  "            <center>CONTRATO DE PRESTA????O DE SERVI??OS ADVOCAT??CIOS</center>" +
  "        </h3>" +
  '        <p><span style="font-weight: 400;">Pelo presente instrumento particular, que entre si fazem, de um lado como' +
  "                cliente/contratante e assim doravante indicado, <b>{{name}}</b>, <b>{{nacionalidade}}</b>," +
  "                <b>{{estadocivil}}</b>, portador(a) do RG: <b>{{rg}}</b> <b>[client.RG ??rg??o]</b>, CPF: " +
  "                <b>{{cpf}}</b>, domiciliado(a) no(a) <b>{{endereco}}</b>, <b>{{cidade}}</b> -" +
  "                <b>{{estado}}</b>, CEP: <b>{{cep}}</b> telefone: <b>{{telefone}}</b>, e de outro lado, como" +
  "                prestador de servi??o/contratado/escrit??rio, assim doravante indicado, o escrit??rio de Advocacia" +
  "                <b>BOCAYUVA & ADVOGADOS ASSOCIADOS S/S</b>, Pessoa Jur??dica registrada no CNPJ n?? 22.588.047/0001-50," +
  "                inscrita na OAB/DF n?? 2493/2015, neste ato representado por sua s??cia <b>MARCELA CARVALHO BOCAYUVA</b>," +
  "                brasileira, solteira, advogada, inscrita na OAB/DF 41.954, CPF: 021.164.381-52, e <b>LUIS FELIPE" +
  "                    CARVALHO BOCAYUVA</b>, brasileiro, solteiro, advogado, inscrito na OAB/DF sob o n?? 50829, CPF" +
  "                021.164.431-56, com endere??o profissional no SRTVS Quadra 701, Edif??cio Multiempresarial, Salas 430-433," +
  "                Bras??lia ??? DF, CEP 70340-907, Telefones: (61) 3032-8936, (61) 9192-9999, (61) 8383-1993, e-mail" +
  "                contato@bocayuvaadvogados.com.br, ajustam entre si, com fulcro no artigo 22 da Lei n?? 8.906/94, mediante" +
  "                as seguintes cl??usulas e condi????es:</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Primeira</b> - O ESCRIT??RIO compromete-se, em cumprimento ao' +
  "                mandato recebido, perante a Justi??a Federal, de interesse do Contratante, para acompanhamento e" +
  "                ajuizamento de a????o previdenci??ria de <b>REVIS??O DE BENEF??CIO</b>, de titularidade do Cliente.</span>" +
  "        </p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Segunda</b> - O (a) CLIENTE, que reconhece j?? haver recebido a' +
  "                Consultoria e orienta????o preventiva comportamental e jur??dica para a consecu????o dos servi??os, fornecer??" +
  "                ao ESCRIT??RIO os documentos e meios necess??rios ?? comprova????o processual do seu pretendido direito, bem" +
  "                como pagar?? as despesas judiciais que decorrem da causa.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Terceira</b> - Em remunera????o pelos servi??os profissionais ora' +
  "                contratados ser??o devidos pelo CLIENTE, a partir do tr??nsito em julgado do Acordo, da Senten??a ou" +
  "                Ac??rd??o Procedente, <b><u>o percentual de 25% (vinte e cinco por cento) do valor bruto recebido a t??tulo" +
  "                        de atrasados ou retroativos, inclusive sobre o CP</u></b> ??? Complemento Positivo, a serem pagos" +
  "                atrav??s de RPV (Requisi????o de Pequeno Valor) ou PRECAT??RIO.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Primeiro</b> - A respectiva quita????o ser?? dada quando da' +
  "                emiss??o, pelo ESCRIT??RIO, da respectiva RPA- Recibo de Presta????o de Servi??o Aut??nomo, com quita????o total" +
  "                e/ou mediante recibo.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Segundo</b> - Tamb??m ser??o devidos, enquanto durar o processo,' +
  "                HONOR??RIOS PRO LABORE na quantia de R$50,00 (cinquenta reais) mensais.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Terceiro</b> - O CLIENTE autoriza o desconto, no ato do' +
  "                pagamento dos valores a t??tulo de atrasados, por meio de RPV, dos valores de honor??rios acima" +
  "                referenciados.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo Quarto</b> - No caso de composi????o amig??vel e ainda na esfera' +
  "                administrativa perante o INSS, os honor??rios ser??o devidos na mesma propor????o.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Quarta</b> - Considerar-se-??o vencidos e imediatamente exig??veis' +
  "                os honor??rios ora contratados a partir do quinto dia ??til do m??s subsequente ao m??s de" +
  "                vencimento.</u></b></span></p>" +
  '        <p><span style="font-weight: 400;"><b>Par??grafo ??nico</b> - Pelo inadimplemento dos honor??rios contratuais' +
  "                expostos na Cl??usula Terceira, incidir??o juros morat??rios mensais de 1% (um por cento), corre????o" +
  "                monet??ria de indexador INPC e multa de 30% (trinta por cento), a t??tulo de cl??usula penal, sobre o valor" +
  "                de cada parcela devida e n??o adimplida;</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Quinta</b> - Na hip??tese de revoga????o do mandato outorgado ao' +
  "                <b>ESCRIT??RIO</b> para a presta????o do servi??o objeto deste contrato ap??s o ajuizamento da a????o, ter?? o" +
  "                escrit??rio direito ao valor cobrado pela tabela da OAB para ingresso da a????o previdenci??ria que equivale" +
  "                a 30URH, al??m de possuir direito ao recebimento integral do valor dos honor??rios advocat??cios" +
  "                contratuais e de sucumb??ncia. O presente contrato obriga os sucessores, herdeiros e legat??rios do" +
  "                cliente ao seu fiel cumprimento.</span></p>" +
  '        <p><span style="font-weight: 400;"><b>Cl??usula Sexta</b> - Os honor??rios de condena????o (sucumb??ncia), caso sejam' +
  "                fixados, pertencer??o EXCLUSIVAMENTE ao ESCRIT??RIO, sem exclus??o dos que ora s??o contratados, de" +
  "                conformidade com os artigos 23 da Lei n?? 8.906/94 e 35, par??grafo 1??, do C??digo de ??tica e Disciplina da" +
  "                Ordem dos Advogados do Brasil. </span></p>" +
  '        <p><span style="font-weight: 400;">Elegem as partes o foro da Circunscri????o judici??ria de Bras??lia-DF, para' +
  "                dirimir controv??rsias que possam surgir do presente contrato, podendo o Advogado optar pelo foro de" +
  "                resid??ncia do Contratante. </span></p>" +
  '        <p><span style="font-weight: 400;">E por estarem assim justos e contratados, saibam as partes que se trata de um' +
  "                t??tulo executivo nos termos do artigo Art. 24. Do EOAB e 585, II do C??digo de Processo Civil, portanto," +
  "                assinam o presente em duas vias de igual forma e teor, para que possa produzir todos os seus efeitos de" +
  "                direito.</span></p>" +
  '        <p><span style="font-weight: 400;">' +
  "                <center>Bras??lia, {{currentDate}}.</center>" +
  "            </span></p>" +
  "    </div>" +
  '    <div class="row">' +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratante</p>" +
  "            </center>" +
  "        </div>" +
  '        <div class="column">' +
  "            <center>" +
  "                <p>__________________________________</p>" +
  "                <p>Contratado</p>" +
  "            </center>" +
  "        </div>" +
  "    </div>" +
  '    <div style="text-align: center;">' +
  '        <p style="color: goldenrod; margin-top:0 px;">' +
  "            ______________________________________________</p>" +
  '        <p style="padding-bottom: 50px;"><span>SRTVS Quadra 701 ??? bloco O ??? salas 430/433 ??? Multiempresarial ??? Bras??lia/DF ??? 70340-000</span>' +
  '            <br><span style="color: blue;"><u>www.bocayuvaadvogados.com.br</u> ???' +
  "                <u>contato@bocayuvaadvogados.com.br</u></span>" +
  "            <br><span>(61) 3032-8936 / (61) 3032-8933<br><br></span>" +
  "        </p>" +
  "    </div>" +
  "</body>" +
  "</html>"

export const procuracao =
  "<!doctype html>" +
  '<html lang="pt">' +
  "" +
  "<head>" +
  "    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>" +
  "    <style>" +
  "        body {" +
  "            font-family: 'Roboto';font-size: 15px;" +
  "            background-image: url('{{siteUrl}}/api/img/BackgroundBody.jpg');" +
  "        }" +
  "        div {" +
  "            text-align: justify;" +
  "            text-justify: inter-word;" +
  "            font-family: Arial" +
  "        }" +
  "" +
  "        * {" +
  "            box-sizing: border-box;" +
  "        }" +
  "" +
  "        .column {" +
  "            float: left;" +
  "            width: 50%;" +
  "            padding: 10px;" +
  "            height: 50px;" +
  "        }" +
  "" +
  "        .row:after {" +
  '            content: "";' +
  "            display: table;" +
  "            clear: both;" +
  "        }" +
  "    </style>" +
  '    <meta charset="utf-8">' +
  "</head>" +
  "" +
  "<body background-image: url('{{siteUrl}}/api/img/BackgroundBody.jpg');>" +
  "    <div>" +
  '    <div style="text-align: right; padding-right: 10%; padding-top: 5%;"><img src="{{siteUrl}}/api/img/Logo.png" alt="BCA" width=20%' +
  "            height=15%></div>" +
  '    <div style="padding-right: 10%; padding-left: 10%; padding-top: 3%;">' +
  "        <h3>" +
  "            <center>PROCURA????O</center>" +
  "        </h3>" +
  '        <p><span style="font-weight: 400;"><b>{{name}}</b>, <b>{{nacionalidade}}</b>, <b>{{estadocivil}}</b>, inscrito no CPF: ' +
  "                <b>{{cpf}}</b>" +
  "                RG: <b>{{rg}}</b>, residente e domiciliado no endere??o: <b>{{endereco}}</b>, CEP: " +
  "                <b>{{cep}}</b>," +
  "                nomeia e constitui seu bastante procurador o advogado <b>LUIS FELIPE" +
  "                    CARVALHO BOCAYUVA</b>, inscrito na Ordem dos Advogados do Brasil sob o n?? 50.829 e a advogada" +
  "                <b>MARCELA" +
  "                    CARVALHO BOCAYUVA</b>, inscrita na Ordem dos Advogados do Brasil, com o respectivo n??mero:" +
  "                41.954/DF, s??cia" +
  "                do escrit??rio de Advocacia <b>BOCAYUVA & ADVOGADOS ASSOCIADOS</b>, Pessoa Jur??dica registrada no CNPJ n??" +
  "                22.588.047/0001-50, inscrita na OAB/DF n?? 2493/2015, com endere??o profissional estabelecido no SRTVS Quadra 701, Edif??cio Multiempresarial, Salas 430-433," +
  "                Bras??lia ??? DF, CEP 70340-907, Telefones: (61) 3032-8936, (61) 9192-9999, (61) 8383-1993, e-mail" +
  "                contato@bocayuvaadvogados.com.br" +
  "                onde" +
  "                recebe intima????es, para represent??-lo, em Ju??zo, em quaisquer Inst??ncias, em qualquer a????o em que seja" +
  "                autor, r??u, assistente ou oponente, em especial para o ingresso de a????o judicial, podendo os referidos" +
  "                procuradores usar de todos os poderes da cl??usula ad juditia, e mais, receber cita????o e intima????es," +
  "                extrair fotoc??pias, acordar, desistir, transigir, firmar compromisso, recorrer, receber valores e" +
  "                realizar o levantamento de alvar?? judicial, renunciar a cr??dito, prestar e firmar declara????o de isen????o" +
  "                de imposto de renda junto ao Banco do Brasil e Caixa Econ??mica Federal, substabelecendo ou n??o, em quem" +
  "                e como convir.</span></p>" +
  '        <p><span style="font-weight: 400;">' +
  "                <center>Bras??lia, <b>{{currentDate}}</b>.</center>" +
  "            </span></p>" +
  "    </div>" +
  '    <div class="row">' +
  "        <center>" +
  "            <p>__________________________________</p>" +
  "            <p><b>{{name}}</b></p>" +
  "        </center>" +
  "    </div>" +
  '    <div style="padding-right: 10%; padding-left: 10%; padding-top: 3%;">' +
  "        <h3>" +
  "            <center>DECLARA????O DE GRATUIDADE</center>" +
  "        </h3>" +
  '        <p><span style="font-weight: 400;">Eu, <b>{{name}}</b></b>, declaro na conformidade do' +
  "                disposto nos artigos 98 e seguintes, do C??digo de Processo Civil, que n??o tenho condi????es financeiras de" +
  "                arcar com as despesas processuais sem preju??zo do meu sustento pr??prio bem como de minha fam??lia.</span>" +
  "        </p>" +
  '        <p><span style="font-weight: 400;">' +
  "                <center>Bras??lia, <b>{{currentDate}}</b>.</center>" +
  "            </span></p>" +
  "    </div>" +
  '    <div class="row">' +
  "        <center>" +
  "            <p>__________________________________</p>" +
  "            <p><b>{{name}}</b></p>" +
  "        </center>" +
  "    </div>" +
  "    " +
  "</body>" +
  '    <div style="text-align: center;">' +
  '        <p style="color: goldenrod; margin-top:0 px;">' +
  "            ________________________________________</P>" +
  '        <p style="padding-bottom: 50px;"><span>SRTVS Quadra 701 ??? bloco O ??? salas 430/433 ??? Multiempresarial ???' +
  "                Bras??lia/DF ??? 70340-000</span>" +
  '            <br><span style="color: blue;"><u>www.bocayuvaadvogados.com.br</u> ???' +
  "                <u>contato@bocayuvaadvogados.com.br</u></span>" +
  "            <br><span>(61) 3032-8936 / (61) 3032-8933<br><br></span></p>" +
  "    </div>" +
  "</div>" +
  "</html>"
