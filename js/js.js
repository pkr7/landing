function showDescription(element) {
  const description = element.querySelector(".description");

  // Toggle keterangan (tampilkan/jatuhkan)
  description.style.display = description.style.display === "none" || !description.style.display ? "block" : "none";
}
const tilt = $('.js-tilt').tilt();

    $('.js-destroy').on('click', function () {
        const element = $(this).closest('.js-parent').find('.js-tilt');
        element.tilt.destroy.call(element);
    });

    $('.js-getvalue').on('click', function () {
        const element = $(this).closest('.js-parent').find('.js-tilt');
        const test = element.tilt.getValues.call(element);
        console.log(test[0]);
    });

    $('.js-reset').on('click', function () {
        const element = $(this).closest('.js-parent').find('.js-tilt');
        element.tilt.reset.call(element);
    });
    $('.js-tilt').tilt({
      glare: true,
      maxGlare: .5
    })
