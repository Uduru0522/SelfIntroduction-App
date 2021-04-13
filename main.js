// Generated by CoffeeScript 2.5.1
(function() {
  $(document).ready(function() {
    var current, people;
    people = ['.liu', '.jheng', '.jhou', '.jiang', '.jhuang', '.syu', '.he'];
    current = 0;
    $('.photos').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      infinite: true,
      focusOnSelect: true,
      centerPadding: '7%',
      prevArrow: $('.prev'),
      nextArrow: $('.next')
    });
    people.forEach(function(name) {
      $('#member ' + name).css('display', 'none');
    });
    $('.prev').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member ' + (current === 0 ? people[6] : people[current - 1])).css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member ' + (current === 0 ? people[6] : people[current - 1])).css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current--;
      }), 1000);
    });
    $('.next').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member ' + people[(current + 1) % 7]).css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member ' + people[(current + 1) % 7]).css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current++;
      }), 1000);
    });
    $('.member5').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member .jhuang').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member .jhuang').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current = 4;
      }), 1000);
    });
    $('#member #menu .top .person_one').click(function(event) {
      $('.photos').slick('slickGoTo', 4);
      $('#member #menu').animate({
        opacity: 0
      }, 500, function() {
        $('#member #menu').css('display', 'none');
        $('#member .jhuang').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
      current = 4;
    });
    $('.member3').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member .jhou').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member .jhou').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current = 2;
      }), 1000);
    });
    $('#member #menu .top .person_two').click(function(event) {
      $('.photos').slick('slickGoTo', 2);
      $('#member #menu').animate({
        opacity: 0
      }, 500, function() {
        $('#member #menu').css('display', 'none');
        $('#member .jhou').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
      current = 2;
    });
    $('.member4').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member .jiang').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member .jiang').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current = 3;
      }), 1000);
    });
    $('#member #menu .top .person_three').click(function(event) {
      $('.photos').slick('slickGoTo', 3);
      $('#member #menu').animate({
        opacity: 0
      }, 500, function() {
        $('#member #menu').css('display', 'none');
        $('#member .jiang').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
      current = 3;
    });
    $('.member6').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member .syu').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member .syu').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current = 5;
      }), 1000);
    });
    $('#member #menu .bottom .person_four').click(function(event) {
      $('.photos').slick('slickGoTo', 5);
      $('#member #menu').animate({
        opacity: 0
      }, 500, function() {
        $('#member #menu').css('display', 'none');
        $('#member .syu').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
      current = 5;
    });
    $('.member2').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member .jheng').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member .jheng').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current = 1;
      }), 1000);
    });
    $('#member #menu .bottom .person_five').click(function(event) {
      $('.photos').slick('slickGoTo', 1);
      $('#member #menu').animate({
        opacity: 0
      }, 500, function() {
        $('#member #menu').css('display', 'none');
        $('#member .jheng').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
      current = 1;
    });
    $('.member7').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member .he').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member .he').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current = 6;
      }), 1000);
    });
    $('#member #menu .bottom .person_six').click(function(event) {
      $('.photos').slick('slickGoTo', 6);
      $('#member #menu').animate({
        opacity: 0
      }, 500, function() {
        $('#member #menu').css('display', 'none');
        $('#member .he').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
      current = 6;
    });
    $('.member1').click(function(event) {
      if ($('#member #menu').css('display') === 'none') {
        $('#member ' + people[current]).animate({
          opacity: 0
        }, 500, function() {
          $('#member ' + people[current]).css('display', 'none');
          $('#member .liu').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      } else {
        $('#member #menu').animate({
          opacity: 0
        }, 500, function() {
          $('#member #menu').css('display', 'none');
          $('#member .liu').css({
            'opacity': '0',
            'display': 'flex'
          }).animate({
            opacity: 1
          }, 500);
        });
      }
      setTimeout((function() {
        current = 0;
      }), 1000);
    });
    $('#member #menu .bottom .person_seven').click(function(event) {
      $('.photos').slick('slickGoTo', 0);
      $('#member #menu').animate({
        opacity: 0
      }, 500, function() {
        $('#member #menu').css('display', 'none');
        $('#member .liu').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
      current = 0;
    });
    $('#member .back_button').click(function(event) {
      $('#member ' + people[current]).animate({
        opacity: 0
      }, 500, function() {
        $('#member ' + people[current]).css('display', 'none');
        $('#member #menu').css({
          'opacity': '0',
          'display': 'flex'
        }).animate({
          opacity: 1
        }, 500);
      });
    });
  });

}).call(this);
