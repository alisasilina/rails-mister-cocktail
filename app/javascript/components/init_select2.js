import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  $('.select2').select2();
  $(".js-example-tags").select2({
  tags: true
});

};

export { initSelect2 };
