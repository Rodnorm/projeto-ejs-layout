  $(document).ready(() => {
      $('.sidenav').sidenav();
      $('.collapsible').collapsible();
      $('.tabs').tabs();
      $(document).click((event) => {
        if (event.target.id === 'icon_prefix_input') {
          $('#icon_prefix').toggleClass('active');
          return;
        }
        $('#icon_prefix').toggleClass('active');
      });
    });