(function(){dust.register("itemView",body_0);function body_0(chk,ctx){return chk.write("<li class='").reference(ctx.get("itemNum"),ctx,"h").write("' data-token='").reference(ctx.get("token"),ctx,"h").write("'> <div class=\"menu-image\"><img src=\"thumb/").reference(ctx.get("imgPath"),ctx,"h").write("\"  class=\"itemImg shadow \"/></div><div class=\"menu-description\"><div class=\"ellipsis menu-dish\">").reference(ctx.get("title"),ctx,"h").write("</div><div class=\"itemDescription smallFont\">").reference(ctx.get("description"),ctx,"h").write("</div><div class=\"menu-rating\"><img src=\"img/star_yellow.png\"  class=\"star\"/><img src=\"img/star_yellow.png\"  class=\"star\"/><img src=\"img/star_yellow.png\"  class=\"star\"/><img src=\"img/star_yellow.png\"  class=\"star\"/><img src=\"img/star_grey.png\"  class=\"star\"/><div class=\"price alpha60\">$").reference(ctx.get("price"),ctx,"h").write("</div></div>   </div><div style=\"clear:both;\"></div></li>");}return body_0;})();