
var layer;
 d3.json("http://34.78.46.186/Circles/Towns/50", function(error, data) {
  if (error) throw error;

  var overlay = new google.maps.OverlayView();


  overlay.onAdd = function() {
     layer = d3.select(this.getPanes().overlayMouseTarget).append("div")
        .attr("class", "towns");

  overlay.draw = function() {
    var projection = this.getProjection(),
        padding = 10;

        var tooltip = d3.selectAll("body").append("div")
                        .attr("class", "tooltip")
                        .style("opacity", 0);

        var marker = layer.selectAll("svg")
            .data(data)
            .each(transform) // update existing markers
            .enter().append("svg")
            .each(transform)
            .attr("class", "marker");

        // Add a circle.
        marker.append("circle")
            .on("mouseover", MouseOver)
            .on("mouseout", MouseOut)
            .transition()
            .ease(d3.easeLinear)
            .duration(700)
            .attr("r",function (d) {return d.Population/20000;} )
            .attr("cx", padding)
            .attr("cy", padding )


             function MouseOver(d){

                    tooltip.transition()
                    .delay(100)
                        .duration(200)
                        .attr('class','tooltip')
                        .style("opacity", .9)

                    tooltip.html("Town:" + d.Town + "<br>" + "Population:" + d.Population + "<br>" +"County:" + d.County)

                    tooltip.style("left", (d3.event.pageX ) + "px")
                           .style("top", (d3.event.pageY - 28) + "px")


                    //d3.select(this).attr("class","highlight")
                    d3.select(this).transition().duration(500)
                    .attr("r",function (d) {return d.Population/10000;})
                      .style("fill","#e60b21")
                      .style("stroke","#e60b21")

                    };
                function MouseOut() {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);

                        d3.select(this).transition().duration(500)
                          .attr("r",function (d) {return d.Population/20000;})
                          .style("fill","#879fa8")
                          .style("stroke","#11111a")




                };

             function transform(d) {
              var val = new google.maps.LatLng(d.lat, d.lng);
               val = projection.fromLatLngToDivPixel(val);
               return d3.select(this)
                   .style("left", (val.x - padding) + "px")
                   .style("top", (val.y - padding) + "px");
             }
           }
         }
          overlay.setMap(map);
       })

            var value =50;
             var slider = document.getElementById("slider");
             var output = document.getElementById("demo");
             output.innerHTML = slider.value;

             slider.oninput = function() {
               output.innerHTML = this.value;
               value= this.value;


                        d3.json("http://34.78.46.186/Circles/Towns/"+this.value, function(error, data) {
                         if (error) throw error;
                         layer.remove();
                         var overlay = new google.maps.OverlayView();


                         overlay.onAdd = function() {
                            layer = d3.select(this.getPanes().overlayMouseTarget).append("div")
                               .attr("class", "towns");

                         overlay.draw = function() {
                           var projection = this.getProjection(),
                               padding = 10;

                               var tooltip = d3.selectAll("body").append("div")
                                               .attr("class", "tooltip")
                                               .style("opacity", 0);

                               var marker = layer.selectAll("svg")
                                   .data(data)
                                   .each(transform) // update existing markers
                                   .enter().append("svg")
                                   .each(transform)
                                   .attr("class", "marker");

                               // Add a circle.
                               marker.append("circle")
                                   .on("mouseover", MouseOver)
                                   .on("mouseout", MouseOut)
                                   .transition()
                                   .ease(d3.easeLinear)
                                   .duration(700)
                                   .attr("r",function (d) {return d.Population/20000;} )
                                   .attr("cx", padding)
                                   .attr("cy", padding )


                                    function MouseOver(d){

                                           tooltip.transition()
                                           .delay(100)
                                               .duration(200)
                                               .style("opacity", .9)

                                           tooltip.html("Town:" + d.Town + "<br>" + "Population:" + d.Population + "<br>" +"County:" + d.County)

                                           tooltip.style("left", (d3.event.pageX ) + "px")
                                                  .style("top", (d3.event.pageY - 28) + "px")


                                           //d3.select(this).attr("class","highlight")
                                           d3.select(this).transition().duration(500)
                                           .attr("r",function (d) {return d.Population/10000;})
                                             .style("fill","#e60b21")
                                             .style("stroke","#e60b21")

                                           };
                                       function MouseOut() {
                                           tooltip.transition()
                                               .duration(500)
                                               .style("opacity", 0);

                                               d3.select(this).transition().duration(500)
                                                 .attr("r",function (d) {return d.Population/20000;})
                                                 .style("fill","#879fa8")
                                                 .style("stroke","#11111a")




                                       };

                                    function transform(d) {
                                     var val = new google.maps.LatLng(d.lat, d.lng);
                                      val = projection.fromLatLngToDivPixel(val);
                                      return d3.select(this)
                                          .style("left", (val.x - padding) + "px")
                                          .style("top", (val.y - padding) + "px");
                                    }
                                  }
                                }
                                 overlay.setMap(map);
                              })
                            }

                            d3.select("#option")
                           .on("click",function(){


                              d3.json("http://34.78.46.186/Circles/Towns/"+value, function(error, data) {
                               if (error) throw error;
                                layer.remove();
                               var overlay = new google.maps.OverlayView();


                               overlay.onAdd = function() {
                                  layer = d3.select(this.getPanes().overlayMouseTarget).append("div")
                                     .attr("class", "towns");

                               overlay.draw = function() {
                                 var projection = this.getProjection(),
                                     padding = 10;

                                     var tooltip = d3.selectAll("body").append("div")
                                                     .attr("class", "tooltip")
                                                     .style("opacity", 0);

                                     var marker = layer.selectAll("svg")
                                         .data(data)
                                         .each(transform) // update existing markers
                                         .enter().append("svg")
                                         .each(transform)
                                         .attr("class", "marker");

                                     // Add a circle.
                                     marker.append("circle")
                                         .on("mouseover", MouseOver)
                                         .on("mouseout", MouseOut)
                                         .transition()
                                         .ease(d3.easeLinear)
                                         .duration(700)
                                         .attr("r",function (d) {return d.Population/20000;} )
                                         .attr("cx", padding)
                                         .attr("cy", padding )


                                          function MouseOver(d){

                                                 tooltip.transition()
                                                 .delay(100)
                                                     .duration(200)
                                                     .style("opacity", .9)

                                                 tooltip.html("Town:" + d.Town + "<br>" + "Population:" + d.Population + "<br>" +"County:" + d.County)

                                                 tooltip.style("left", (d3.event.pageX ) + "px")
                                                        .style("top", (d3.event.pageY - 28) + "px")


                                                 //d3.select(this).attr("class","highlight")
                                                 d3.select(this).transition().duration(500)
                                                 .attr("r",function (d) {return d.Population/10000;})
                                                   .style("fill","#e60b21")
                                                   .style("stroke","#e60b21")

                                                 };
                                             function MouseOut() {
                                                 tooltip.transition()
                                                     .duration(500)
                                                     .style("opacity", 0);

                                                     d3.select(this).transition().duration(500)
                                                       .attr("r",function (d) {return d.Population/20000;})
                                                       .style("fill","#879fa8")
                                                       .style("stroke","#11111a")




                                             };

                                          function transform(d) {
                                           var val = new google.maps.LatLng(d.lat, d.lng);
                                            val = projection.fromLatLngToDivPixel(val);
                                            return d3.select(this)
                                                .style("left", (val.x - padding) + "px")
                                                .style("top", (val.y - padding) + "px");
                                          }
                                        }
                                      }
                                       overlay.setMap(map);
                                    })
                                  })
