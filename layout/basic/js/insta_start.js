/* �ν�Ÿ�׷�   */
var feed = new Instafeed({
  get: "user",
  resolution: "low_resolution",
  userId: "���� ���� �ѹ�",
  limit: "4", // �� ��� �̹�������
  accessToken: "�ν�Ÿ�׷� ��ū�ѹ�",
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});
feed.run();

jQuery(document).ready(function () {
  setTimeout(function () {
    var instafeed_now = jQuery("#instagramWidgetManual iframe").html();
    var instafeed_now2 = jQuery(".main_insta_box #instafeed").html();

    /* �ν�Ÿ�׷��� ���ٸ� ���� */
    if (instafeed_now != false && instafeed_now2 == "") {
      jQuery(".main_insta_box")
        .html(
          '<img src="/images/instafeed_m.JPG" style="width:90%;margin-top:20px;">'
        )
        .css("text-align", "center");
    }
  }, 500);
});
