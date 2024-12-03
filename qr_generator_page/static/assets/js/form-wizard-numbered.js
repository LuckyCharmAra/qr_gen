/**
 *  Form Wizard
 */

'use strict';

$(document).ready(function() {
  //hide
  $('#DIVdateRecv').hide();
  $('#DIVpoAttc').hide();
  $('#POC-Demo').hide();
  $('#DIVcomplex-fields').hide();
  $('#DIVcomplex-engineer').hide();
  $('#DIVcomplex-bsm').hide();
  $('#DIVcomplex-costing').hide();
  $('#DIVcomplex-proposal').hide();


  // if PO is received
  $('#stg90-PO-revc1').change(function() {
      if ($(this).val() === 'yes') {
          $('#DIVdateRecv').show();
          $('#DIVpoAttc').show();
      } else {
          $('#DIVdateRecv').hide();
          $('#DIVpoAttc').hide();
      }
  });
  // if answers for each question is others
  $('#Q_A1').change(function() {
    if ($(this).val() === 'others') {
        $('#Q_A1-textarea').show();
    } else {
        $('#Q_A1-textarea').hide();
    }
  });
  $('#Q_A2').change(function() {
    if ($(this).val() === 'others') {
        $('#Q_A2-textarea').show();
    } else {
        $('#Q_A2-textarea').hide();
    }
  });
  $('#Q_A3').change(function() {
    if ($(this).val() === 'others') {
        $('#Q_A3-textarea').show();
    } else {
        $('#Q_A3-textarea').hide();
    }
  });
  // Assigned an Engineer and Task
  $('#complex-task1').change(function() {
    if ($(this).val() === 'task1') {
        $('#DIVcomplex-engineer').show();
    } else {
        $('#DIVcomplex-engineer').hide();
    }
  });  
  // Assigned an bsm
  $('#complex-SOlArchStats1').change(function() {
    if ($(this).val() === 'complete') {
        $('#DIVcomplex-bsm').show();
    } else {
        $('#DIVcomplex-bsm').hide();
    }
  });
  // for costing
  $('#complex-bsm1').change(function() {
    if ($(this).val() === 'bsm1') {
        $('#DIVcomplex-costing').show();
    } else {
        $('#DIVcomplex-costing').hide();
    }
  });  
  // for proposal status
  $('#complex-SOlArchStats2').change(function() {
    if ($(this).val() === 'complete') {
        $('#DIVcomplex-proposal').show();
    } else {
        $('#DIVcomplex-proposal').hide();
    }
  });  

  // if Proposal is submitted
  $('#complex-PropSubmit1').change(function() {
    if ($(this).val() === 'yes') {
        $('#POC-Demo').show();
    } else {
        $('#POC-Demo').hide();
    }
  });

  // RFQ-Complex
  $('#category').change(function() {
    if ($(this).val() === 'complex') {
        $('#DIVcomplex-fields').show();
    } else {
        $('#DIVcomplex-fields').hide();
    }
  });
  // RFQ-Non-Complex w/ Engineer
  $('#Q_A2').change(function() {
    if ($(this).val() === 'others') {
        $('#Q_A2-textarea').show();
    } else {
        $('#Q_A2-textarea').hide();
    }
  });
  //RFQ-Non-Complex w/o Engineer
  $('#Q_A3').change(function() {
    if ($(this).val() === 'others') {
        $('#Q_A3-textarea').show();
    } else {
        $('#Q_A3-textarea').hide();
    }
  });


});


$(function () {
  const select2 = $('.select2'),
    selectPicker = $('.selectpicker');

  // Bootstrap select
  if (selectPicker.length) {
    selectPicker.selectpicker();
  }

  // select2
  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
      $this.select2({
        placeholder: 'Select value',
        dropdownParent: $this.parent()
      });
    });
  }
});
(function () {
  // Age 1 10%
  // --------------------------------------------------------------------
  const wizardNumbered1 = document.querySelector('.age1'),
    wizardNumberedBtnNextList1 = [].slice.call(wizardNumbered1.querySelectorAll('.btn-next')),
    wizardNumberedBtnPrevList1 = [].slice.call(wizardNumbered1.querySelectorAll('.btn-prev')),
    wizardNumberedBtnSubmit1 = wizardNumbered1.querySelector('.btn-submit');

  if (typeof wizardNumbered1 !== undefined && wizardNumbered1 !== null) {
    const numberedStepper1 = new Stepper(wizardNumbered1, {
      linear: false
    });
    if (wizardNumberedBtnNextList1) {
      wizardNumberedBtnNextList1.forEach(wizardNumberedBtnNext1 => {
        wizardNumberedBtnNext1.addEventListener('click', event => {
          numberedStepper1.next();
        });
      });
    }
    if (wizardNumberedBtnPrevList1) {
      wizardNumberedBtnPrevList1.forEach(wizardNumberedBtnPrev1 => {
        wizardNumberedBtnPrev1.addEventListener('click', event => {
          numberedStepper1.previous();
        });
      });
    }
    if (wizardNumberedBtnSubmit1) {
      wizardNumberedBtnSubmit1.addEventListener('click', event => {
        //alert('age1..!!');
      });
    }
  }
  // Age 2 30%
  // --------------------------------------------------------------------
  const wizardNumbered2 = document.querySelector('.age2'),
    wizardNumberedBtnNextList2 = [].slice.call(wizardNumbered2.querySelectorAll('.btn-next')),
    wizardNumberedBtnPrevList2 = [].slice.call(wizardNumbered2.querySelectorAll('.btn-prev')),
    wizardNumberedBtnSubmit2 = wizardNumbered2.querySelector('.btn-submit');

  if (typeof wizardNumbered2 !== undefined && wizardNumbered2 !== null) {
    const numberedStepper2 = new Stepper(wizardNumbered2, {
      linear: false
    });
    if (wizardNumberedBtnNextList2) {
      wizardNumberedBtnNextList2.forEach(wizardNumberedBtnNext2 => {
        wizardNumberedBtnNext2.addEventListener('click', event => {
          numberedStepper2.next();
        });
      });
    }
    if (wizardNumberedBtnPrevList2) {
      wizardNumberedBtnPrevList2.forEach(wizardNumberedBtnPrev2 => {
        wizardNumberedBtnPrev2.addEventListener('click', event => {
          numberedStepper2.previous();
        });
      });
    }
    if (wizardNumberedBtnSubmit2) {
      wizardNumberedBtnSubmit2.addEventListener('click', event => {
        //alert('age2..!!');
      });
    }
  }

  // Age 3 50%
  // --------------------------------------------------------------------
  const wizardNumbered3 = document.querySelector('.age3'),
    wizardNumberedBtnNextList3 = [].slice.call(wizardNumbered3.querySelectorAll('.btn-next')),
    wizardNumberedBtnPrevList3 = [].slice.call(wizardNumbered3.querySelectorAll('.btn-prev')),
    wizardNumberedBtnSubmit3 = wizardNumbered3.querySelector('.btn-submit');

  if (typeof wizardNumbered3 !== undefined && wizardNumbered3 !== null) {
    const numberedStepper3 = new Stepper(wizardNumbered3, {
      linear: false
    });
    if (wizardNumberedBtnNextList3) {
      wizardNumberedBtnNextList3.forEach(wizardNumberedBtnNext3 => {
        wizardNumberedBtnNext3.addEventListener('click', event => {
          numberedStepper3.next();
        });
      });
    }
    if (wizardNumberedBtnPrevList3) {
      wizardNumberedBtnPrevList3.forEach(wizardNumberedBtnPrev3 => {
        wizardNumberedBtnPrev3.addEventListener('click', event => {
          numberedStepper3.previous();
        });
      });
    }
    if (wizardNumberedBtnSubmit3) {
      wizardNumberedBtnSubmit3.addEventListener('click', event => {
        //alert('age3..!!');
      });
    }
  }

  // Age 4 70%
  // --------------------------------------------------------------------
  const wizardNumbered4 = document.querySelector('.age4'),
    wizardNumberedBtnNextList4 = [].slice.call(wizardNumbered4.querySelectorAll('.btn-next')),
    wizardNumberedBtnPrevList4 = [].slice.call(wizardNumbered4.querySelectorAll('.btn-prev')),
    wizardNumberedBtnSubmit4 = wizardNumbered4.querySelector('.btn-submit');

  if (typeof wizardNumbered4 !== undefined && wizardNumbered4 !== null) {
    const numberedStepper4 = new Stepper(wizardNumbered4, {
      linear: false
    });
    if (wizardNumberedBtnNextList4) {
      wizardNumberedBtnNextList4.forEach(wizardNumberedBtnNext4 => {
        wizardNumberedBtnNext4.addEventListener('click', event => {
          numberedStepper4.next();
        });
      });
    }
    if (wizardNumberedBtnPrevList4) {
      wizardNumberedBtnPrevList4.forEach(wizardNumberedBtnPrev4 => {
        wizardNumberedBtnPrev4.addEventListener('click', event => {
          numberedStepper4.previous();
        });
      });
    }
    if (wizardNumberedBtnSubmit4) {
      wizardNumberedBtnSubmit4.addEventListener('click', event => {
        //alert('age3..!!');
      });
    }
  }

  // Age 5 90%
  // --------------------------------------------------------------------
  const wizardNumbered5 = document.querySelector('.age5'),
    wizardNumberedBtnNextList5 = [].slice.call(wizardNumbered5.querySelectorAll('.btn-next')),
    wizardNumberedBtnPrevList5 = [].slice.call(wizardNumbered5.querySelectorAll('.btn-prev')),
    wizardNumberedBtnSubmit5 = wizardNumbered5.querySelector('.btn-submit');

  if (typeof wizardNumbered5 !== undefined && wizardNumbered5 !== null) {
    const numberedStepper5 = new Stepper(wizardNumbered5, {
      linear: false
    });
    if (wizardNumberedBtnNextList5) {
      wizardNumberedBtnNextList5.forEach(wizardNumberedBtnNext5 => {
        wizardNumberedBtnNext5.addEventListener('click', event => {
          numberedStepper5.next();
        });
      });
    }
    if (wizardNumberedBtnPrevList5) {
      wizardNumberedBtnPrevList5.forEach(wizardNumberedBtnPrev5 => {
        wizardNumberedBtnPrev5.addEventListener('click', event => {
          numberedStepper5.previous();
        });
      });
    }
    if (wizardNumberedBtnSubmit5) {
      wizardNumberedBtnSubmit5.addEventListener('click', event => {
        //alert('age3..!!');
      });
    }
  }

  // Age 6 100%
  // --------------------------------------------------------------------
  const wizardNumbered6 = document.querySelector('.age6'),
    wizardNumberedBtnNextList6 = [].slice.call(wizardNumbered6.querySelectorAll('.btn-next')),
    wizardNumberedBtnPrevList6 = [].slice.call(wizardNumbered6.querySelectorAll('.btn-prev')),
    wizardNumberedBtnSubmit6 = wizardNumbered6.querySelector('.btn-submit');

  if (typeof wizardNumbered6 !== undefined && wizardNumbered6 !== null) {
    const numberedStepper6 = new Stepper(wizardNumbered6, {
      linear: false
    });
    if (wizardNumberedBtnNextList6) {
      wizardNumberedBtnNextList6.forEach(wizardNumberedBtnNext6 => {
        wizardNumberedBtnNext6.addEventListener('click', event => {
          numberedStepper6.next();
        });
      });
    }
    if (wizardNumberedBtnPrevList6) {
      wizardNumberedBtnPrevList6.forEach(wizardNumberedBtnPrev6 => {
        wizardNumberedBtnPrev6.addEventListener('click', event => {
          numberedStepper6.previous();
        });
      });
    }
    if (wizardNumberedBtnSubmit6) {
      wizardNumberedBtnSubmit6.addEventListener('click', event => {
        //alert('age3..!!');
      });
    }
  }

  // Vertical Wizard
  // --------------------------------------------------------------------
  const wizardVertical = document.querySelector('.wizard-vertical'),
    // wizardVerticalBtnNextList = [].slice.call(wizardVertical.querySelectorAll('.btn-nextv')),
    // wizardVerticalBtnPrevList = [].slice.call(wizardVertical.querySelectorAll('.btn-prevv')),
    wizardVerticalBtnSubmitList = wizardVertical.querySelectorAll('.btn-submit');
    console.log('buttons', wizardVerticalBtnSubmitList)
  if (typeof wizardVertical !== undefined && wizardVertical !== null) {
    const verticalStepper = new Stepper(wizardVertical, {
      linear: false
    });
    // if (wizardVerticalBtnNextList) {
    //   wizardVerticalBtnNextList.forEach(wizardVerticalBtnNext => {
    //     wizardVerticalBtnNext.addEventListener('click', event => {
    //       verticalStepper.next();
    //     });
    //   });
    // }
    // if (wizardVerticalBtnPrevList) {
    //   wizardVerticalBtnPrevList.forEach(wizardVerticalBtnPrev => {
    //     wizardVerticalBtnPrev.addEventListener('click', event => {
    //       verticalStepper.previous();
    //     });
    //   });
    // }
    if (wizardVerticalBtnSubmitList) {
      wizardVerticalBtnSubmitList.forEach(wizardVerticalBtnSubmit => {
        wizardVerticalBtnSubmit.addEventListener('click', event => {
          verticalStepper.next();
        });
    });
    }
  }

  // // Modern Wizard
  // // --------------------------------------------------------------------
  // const wizardModern = document.querySelector('.wizard-modern-example'),
  //   wizardModernBtnNextList = [].slice.call(wizardModern.querySelectorAll('.btn-next')),
  //   wizardModernBtnPrevList = [].slice.call(wizardModern.querySelectorAll('.btn-prev')),
  //   wizardModernBtnSubmit = wizardModern.querySelector('.btn-submit');
  // if (typeof wizardModern !== undefined && wizardModern !== null) {
  //   const modernStepper = new Stepper(wizardModern, {
  //     linear: false
  //   });
  //   if (wizardModernBtnNextList) {
  //     wizardModernBtnNextList.forEach(wizardModernBtnNext => {
  //       wizardModernBtnNext.addEventListener('click', event => {
  //         modernStepper.next();
  //       });
  //     });
  //   }
  //   if (wizardModernBtnPrevList) {
  //     wizardModernBtnPrevList.forEach(wizardModernBtnPrev => {
  //       wizardModernBtnPrev.addEventListener('click', event => {
  //         modernStepper.previous();
  //       });
  //     });
  //   }
  //   if (wizardModernBtnSubmit) {
  //     wizardModernBtnSubmit.addEventListener('click', event => {
  //       alert('Submitted..!!');
  //     });
  //   }
  // }

  // Modern Vertical Wizard
  // --------------------------------------------------------------------
  // const wizardModernVertical = document.querySelector('.wizard-modern-vertical'),
  //   wizardModernVerticalBtnNextList = [].slice.call(wizardModernVertical.querySelectorAll('.btn-next')),
  //   wizardModernVerticalBtnPrevList = [].slice.call(wizardModernVertical.querySelectorAll('.btn-prev')),
  //   wizardModernVerticalBtnSubmit = wizardModernVertical.querySelector('.btn-submit');
  // if (typeof wizardModernVertical !== undefined && wizardModernVertical !== null) {
  //   const modernVerticalStepper = new Stepper(wizardModernVertical, {
  //     linear: false
  //   });
  //   if (wizardModernVerticalBtnNextList) {
  //     wizardModernVerticalBtnNextList.forEach(wizardModernVerticalBtnNext => {
  //       wizardModernVerticalBtnNext.addEventListener('click', event => {
  //         modernVerticalStepper.next();
  //       });
  //     });
  //   }
  //   if (wizardModernVerticalBtnPrevList) {
  //     wizardModernVerticalBtnPrevList.forEach(wizardModernVerticalBtnPrev => {
  //       wizardModernVerticalBtnPrev.addEventListener('click', event => {
  //         modernVerticalStepper.previous();
  //       });
  //     });
  //   }
  //   if (wizardModernVerticalBtnSubmit) {
  //     wizardModernVerticalBtnSubmit.addEventListener('click', event => {
  //       alert('Submitted..!!');
  //     });
  //   }
  // }
})();
