var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array;function bacajuga(e){for(var l=0;l<e.feed.entry.length;l++){var t=e.feed.entry[l];relatedTitles[relatedTitlesNum]=t.title.$t;for(var r=0;r<t.link.length;r++)if("alternate"==t.link[r].rel){relatedUrls[relatedTitlesNum]=t.link[r].href,relatedTitlesNum++;break}}}function removeRelatedDuplicates(){for(var e=new Array(0),l=new Array(0),t=0;t<relatedUrls.length;t++)contains(e,relatedUrls[t])||(e.length+=1,e[e.length-1]=relatedUrls[t],l.length+=1,l[l.length-1]=relatedTitles[t]);relatedTitles=l,relatedUrls=e}function contains(e,l){for(var t=0;t<e.length;t++)if(e[t]==l)return!0;return!1}function printRelatedLabels(e){for(var l=0;l<relatedUrls.length;l++)relatedUrls[l]==e&&(relatedUrls.splice(l,1),relatedTitles.splice(l,1));var t=Math.floor((relatedTitles.length-1)*Math.random());l=0;if(widgetBacaJuga==1&&relatedTitles.length>1){for(document.write("<div class='baca-juga-wrap'>" + judulbacajuga + "<ul>");l<relatedTitles.length&&l<20&&l<jumlahbacajuga;)document.write('<li><a href="'+relatedUrls[t]+'">'+relatedTitles[t]+"</a></li>"),t<relatedTitles.length-1?t++:t=0,l++;document.write("</ul></div>")}relatedUrls.splice(0,relatedUrls.length),relatedTitles.splice(0,relatedTitles.length)}
