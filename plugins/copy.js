import Vue from 'vue';

const copyString = element => {
  try {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    return true
  } catch {
    return false
  }
};

Vue.filter('copyString', copyString)
