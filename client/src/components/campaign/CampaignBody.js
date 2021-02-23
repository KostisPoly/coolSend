import React from "react";
import ContentEditable from "react-contenteditable";
import { connect } from 'react-redux';

class CampaignBody extends React.Component {
    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = {html: ''};
//         this.state = { html: `<style>/* What it does: Remove spaces around the email design added by some email clients. */
//         /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
//         html,
// body {
//     margin: 0 auto !important;
//     padding: 0 !important;
//     height: 100% !important;
//     width: 100% !important;
//     background: #f1f1f1;
// }

// /* What it does: Stops email clients resizing small text. */
// * {
//     -ms-text-size-adjust: 100%;
//     -webkit-text-size-adjust: 100%;
// }

// /* What it does: Centers email on Android 4.4 */
// div[style*="margin: 16px 0"] {
//     margin: 0 !important;
// }

// /* What it does: Stops Outlook from adding extra spacing to tables. */
// table,
// td {
//     mso-table-lspace: 0pt !important;
//     mso-table-rspace: 0pt !important;
// }

// /* What it does: Fixes webkit padding issue. */
// table {
//     border-spacing: 0 !important;
//     border-collapse: collapse !important;
//     table-layout: fixed !important;
//     margin: 0 auto !important;
// }

// /* What it does: Uses a better rendering method when resizing images in IE. */
// img {
//     -ms-interpolation-mode:bicubic;
// }

// /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
// a {
//     text-decoration: none;
// }

// /* What it does: A work-around for email clients meddling in triggered links. */
// *[x-apple-data-detectors],  /* iOS */
// .unstyle-auto-detected-links *,
// .aBn {
//     border-bottom: 0 !important;
//     cursor: default !important;
//     color: inherit !important;
//     text-decoration: none !important;
//     font-size: inherit !important;
//     font-family: inherit !important;
//     font-weight: inherit !important;
//     line-height: inherit !important;
// }

// /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
// .a6S {
//     display: none !important;
//     opacity: 0.01 !important;
// }

// /* What it does: Prevents Gmail from changing the text color in conversation threads. */
// .im {
//     color: inherit !important;
// }

// /* If the above doesn't work, add a .g-img class to any image in question. */
// img.g-img + div {
//     display: none !important;
// }

// /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
// /* Create one of these media queries for each additional viewport size you'd like to fix */

// /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
// @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
//     u ~ div .email-container {
//         min-width: 320px !important;
//     }
// }
// /* iPhone 6, 6S, 7, 8, and X */
// @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
//     u ~ div .email-container {
//         min-width: 375px !important;
//     }
// }
// /* iPhone 6+, 7+, and 8+ */
// @media only screen and (min-device-width: 414px) {
//     u ~ div .email-container {
//         min-width: 414px !important;
//     }
// }

//     </style>

//     <!-- CSS Reset : END -->

//     <!-- Progressive Enhancements : BEGIN -->
//     <style>

// 	    .primary{
// 	background: #30e3ca;
// }
// .bg_white{
// 	background: #ffffff;
// }
// .bg_light{
// 	background: #fafafa;
// }
// .bg_black{
// 	background: #000000;
// }
// .bg_dark{
// 	background: rgba(0,0,0,.8);
// }
// .email-section{
// 	padding:2.5em;
// }

// /*BUTTON*/
// .btn{
// 	padding: 10px 15px;
// 	display: inline-block;
// }
// .btn.btn-primary{
// 	border-radius: 5px;
// 	background: #30e3ca;
// 	color: #ffffff;
// }
// .btn.btn-white{
// 	border-radius: 5px;
// 	background: #ffffff;
// 	color: #000000;
// }
// .btn.btn-white-outline{
// 	border-radius: 5px;
// 	background: transparent;
// 	border: 1px solid #fff;
// 	color: #fff;
// }
// .btn.btn-black-outline{
// 	border-radius: 0px;
// 	background: transparent;
// 	border: 2px solid #000;
// 	color: #000;
// 	font-weight: 700;
// }

// h1,h2,h3,h4,h5,h6{
// 	font-family: 'Lato', sans-serif;
// 	color: #000000;
// 	margin-top: 0;
// 	font-weight: 400;
// }

// body{
// 	font-family: 'Lato', sans-serif;
// 	font-weight: 400;
// 	font-size: 15px;
// 	line-height: 1.8;
// 	color: rgba(0,0,0,.4);
// }

// a{
// 	color: #30e3ca;
// }

// table{
// }
// /*LOGO*/

// .logo h1{
// 	margin: 0;
// }
// .logo h1 a{
// 	color: #30e3ca;
// 	font-size: 24px;
// 	font-weight: 700;
// 	font-family: 'Lato', sans-serif;
// }

// /*HERO*/
// .hero{
// 	position: relative;
// 	z-index: 0;
// }

// .hero .text{
// 	color: rgba(0,0,0,.3);
// }
// .hero .text h2{
// 	color: #000;
// 	font-size: 40px;
// 	margin-bottom: 0;
// 	font-weight: 400;
// 	line-height: 1.4;
// }
// .hero .text h3{
// 	font-size: 24px;
// 	font-weight: 300;
// }
// .hero .text h2 span{
// 	font-weight: 600;
// 	color: #30e3ca;
// }


// /*HEADING SECTION*/
// .heading-section{
// }
// .heading-section h2{
// 	color: #000000;
// 	font-size: 28px;
// 	margin-top: 0;
// 	line-height: 1.4;
// 	font-weight: 400;
// }
// .heading-section .subheading{
// 	margin-bottom: 20px !important;
// 	display: inline-block;
// 	font-size: 13px;
// 	text-transform: uppercase;
// 	letter-spacing: 2px;
// 	color: rgba(0,0,0,.4);
// 	position: relative;
// }
// .heading-section .subheading::after{
// 	position: absolute;
// 	left: 0;
// 	right: 0;
// 	bottom: -10px;
// 	content: '';
// 	width: 100%;
// 	height: 2px;
// 	background: #30e3ca;
// 	margin: 0 auto;
// }

// .heading-section-white{
// 	color: rgba(255,255,255,.8);
// }
// .heading-section-white h2{
// 	font-family: 
// 	line-height: 1;
// 	padding-bottom: 0;
// }
// .heading-section-white h2{
// 	color: #ffffff;
// }
// .heading-section-white .subheading{
// 	margin-bottom: 0;
// 	display: inline-block;
// 	font-size: 13px;
// 	text-transform: uppercase;
// 	letter-spacing: 2px;
// 	color: rgba(255,255,255,.4);
// }


// ul.social{
// 	padding: 0;
// }
// ul.social li{
// 	display: inline-block;
// 	margin-right: 10px;
// }

// /*FOOTER*/

// .footer{
// 	border-top: 1px solid rgba(0,0,0,.05);
// 	color: rgba(0,0,0,.5);
// }
// .footer .heading{
// 	color: #000;
// 	font-size: 20px;
// }
// .footer ul{
// 	margin: 0;
// 	padding: 0;
// }
// .footer ul li{
// 	list-style: none;
// 	margin-bottom: 10px;
// }
// .footer ul li a{
// 	color: rgba(0,0,0,1);
// }


// @media screen and (max-width: 500px) {


// }</style><center style="width: 100%; background-color: #f1f1f1;">
//         <div style="max-width: 600px; margin: 0 auto;" class="email-container">
//             <!-- BEGIN BODY -->
//             <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
//                 <tr>
//                 <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em;">
//                     <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
//                         <tr>
//                             <td class="logo" style="text-align: center;">
//                                 <h1><a href="#">e-Verify</a></h1>
//                             </td>
//                         </tr>
//                     </table>
//                 </td>
//                 </tr><!-- end tr -->
//                 <tr>
//                 <td valign="middle" class="hero bg_white" style="padding: 3em 0 2em 0;">
//                     <img src="images/email.png" alt="" style="width: 300px; max-width: 600px; height: auto; margin: auto; display: block;">
//                 </td>
//                 </tr><!-- end tr -->
//                         <tr>
//                 <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0;">
//                     <table>
//                         <tr>
//                             <td>
//                                 <div class="text" style="padding: 0 2.5em; text-align: center;">
//                                     <h2>Please verify your email</h2>
//                                     <h3>Amazing deals, updates, interesting news right in your inbox</h3>
//                                     <p><a href="#" class="btn btn-primary">Yes! Subscribe Me</a></p>
//                                 </div>
//                             </td>
//                         </tr>
//                     </table>
//                 </td>
//                 </tr><!-- end tr -->
//             <!-- 1 Column Text + Button : END -->
//             </table>
//             <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
//                 <tr>
//                 <td valign="middle" class="bg_light footer email-section">
//                     <table>
//                         <tr>
//                         <td valign="top" width="33.333%" style="padding-top: 20px;">
//                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
//                             <tr>
//                             <td style="text-align: left; padding-right: 10px;">
//                                 <h3 class="heading">About</h3>
//                                 <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
//                             </td>
//                             </tr>
//                         </table>
//                         </td>
//                         <td valign="top" width="33.333%" style="padding-top: 20px;">
//                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
//                             <tr>
//                             <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
//                                 <h3 class="heading">Contact Info</h3>
//                                 <ul>
//                                             <li><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
//                                             <li><span class="text">+2 392 3929 210</span></a></li>
//                                         </ul>
//                             </td>
//                             </tr>
//                         </table>
//                         </td>
//                         <td valign="top" width="33.333%" style="padding-top: 20px;">
//                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
//                             <tr>
//                             <td style="text-align: left; padding-left: 10px;">
//                                 <h3 class="heading">Useful Links</h3>
//                                 <ul>
//                                             <li><a href="#">Home</a></li>
//                                             <li><a href="#">About</a></li>
//                                             <li><a href="#">Services</a></li>
//                                             <li><a href="#">Work</a></li>
//                                         </ul>
//                             </td>
//                             </tr>
//                         </table>
//                         </td>
//                     </tr>
//                     </table>
//                 </td>
//                 </tr><!-- end: tr -->
//                 <tr>
//                 <td class="bg_light" style="text-align: center;">
//                     <p>No longer want to receive these email? You can <a href="#" style="color: rgba(0,0,0,.8);">Unsubscribe here</a></p>
//                 </td>
//                 </tr>
//             </table>
        
//             </div>
//         </center>` };
    }

    renderContent() {

        switch (this.props.html) {
            
            case null:
                return ;
            case '':
                return ;
            default:
                return(
                <div>
                    <ContentEditable
                        innerRef={this.contentEditable}
                        html={this.state} // innerHTML of the editable div
                        disabled={false} // use true to disable editing
                        onChange={this.handleChange} // handle innerHTML change
                        // tagName="article" // Use a custom HTML tag (uses a div by default)
                    />
                </div>
                );
        }
    }
    handleChange = (evt) => {
        // SETSTATE() WONT WORK!!
        // this.setState({ html: evt.target.value });
        this.state = evt.target.value;
        
    };

    render() {
        // console.log(this.props.html);
        if(this.props.html) {
            this.state = this.props.html;
        }
        return (
            <div>
            {this.renderContent()}
            </div>
            
        );
    };
}

function mapStateToProps(state) {
    
    if(state.template){
        return { html: state.template.template }
    }else{
        return { html: "" };
    }
    
}
export default connect(mapStateToProps)(CampaignBody);