<?php
// URL TARGET
$url = 'https://www.useetv.com/livetv/transtv';
//end
// get / mengambil content berdasarkan url yang akan di curi datanya
$content = file_get_contents($url);
//
// STEP 1 mengambil syntax pembuka
$first_step = explode( '<div class="vjs-box" style="width:100%;max-height:50vh;">' , $content );
//
// STEP 2 mengambil syntax penutup
$second_step = explode('</div>' , $first_step[1] );
//
// Replace syntax </tbody> dengan </tbody></table>
$text1 = $second_step[0];
//Tampilkan 
echo $text1;
?>