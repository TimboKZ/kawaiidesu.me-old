/**
 * timbo.kz core typescript (https://github.com/timbokz/kawaiidesu.me)
 * Copyright (c) 2016 Timur Kuzhagaliyev (TimboKZ)
 */
var TimboKZ;
(function (TimboKZ) {
    var Core = (function () {
        function Core() {
            this.background = '#f2f2f2';
            this.foreground = '#fff';
            this.shadow = '#eaeaea';
            this.border = '#ddd';
            this.padding = '20px';
            this.itemHeight = 210;
            this.itemWidth = 300;
            this.borderWidth = 1;
            this.items = [];
            this.items.push({
                name: 'Auth-chan',
                slug: 'Auth-chan',
                svg: ''
            });
        }
        Core.prototype.animate = function () {
            var that = this;
            var sidebar = $('#sidebar');
            var logo = $('#logo');
            TweenMax.to(sidebar, 2, {
                bottom: '0%',
                ease: Quart.easeInOut,
                onComplete: function () {
                    var delay = 1;
                    $('.core-item-wrapper').each(function (index, item) {
                        TweenMax.to($(item).find('.core-item-line-top'), 1, {
                            width: that.itemWidth + that.borderWidth,
                            delay: delay
                        });
                        TweenMax.to($(item).find('.core-item-line-bottom'), 1, {
                            width: that.itemWidth + that.borderWidth,
                            delay: delay
                        });
                        TweenMax.to($(item).find('.core-item-line-right'), 1, {
                            height: that.itemHeight + that.borderWidth,
                            delay: delay
                        });
                        TweenMax.to($(item).find('.core-item-line-left'), 1, {
                            height: that.itemHeight + that.borderWidth,
                            delay: delay
                        });
                        TweenMax.to($(item).find('.core-item'), 1, {
                            opacity: 1,
                            delay: delay + 1,
                            onComplete: function () {
                                if (index != 0)
                                    return;
                                new Vivus('Auth-chan-thumbnail', {
                                    type: 'delayed',
                                    duration: 200
                                }, null);
                                $('.cls-1').css('stroke', '#000');
                            }
                        });
                        delay += 0.2;
                    });
                }
            });
            TweenMax.to(sidebar, 4, {
                boxShadow: 'inset ' + this.foreground + ' 50px 2000px 300px -100px',
                ease: Quart.easeInOut,
                onComplete: function () {
                    sidebar.css('background-color', that.foreground);
                    sidebar.css('box-shadow', that.shadow + ' 0 0 0');
                    TweenMax.to(sidebar, 1, {
                        boxShadow: that.shadow + ' 0 0 20px',
                        ease: Quart.easeInOut
                    });
                    TweenMax.to(logo, 2, {
                        opacity: 1,
                        delay: 2
                    });
                }
            });
        };
        return Core;
    }());
    TimboKZ.Core = Core;
})(TimboKZ || (TimboKZ = {}));
