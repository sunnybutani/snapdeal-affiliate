(function() {

  var SNAPDEAL_LINK_REGEX = /((?:https?:)?(?:\/\/)?(?:www\.)?snapdeal\.[^\b\s"'<>()]+)/ig;
  var SNAPDEAL_DOMAIN_EXTRACTOR_REGEX = /snapdeal\.([^\?\/]{2,})/i;
  var SNAPDEAL_ASIN_EXTRACTOR_REGEX = /\/([A-Z0-9]{10})(?:[\?\/%]|$)/i;

  Discourse.Dialect.addPreProcessor(function(text) {
    if (Discourse.SiteSettings.affiliate_enabled) {
      text = text.replace(SNAPDEAL_LINK_REGEX, function(href) {
        if (SNAPDEAL_DOMAIN_EXTRACTOR_REGEX.test(href)) {
          var domain = SNAPDEAL_DOMAIN_EXTRACTOR_REGEX.exec(href)[1];
       
            if (Discourse.SiteSettings.affiliate_snapdeal_tag.length > 0) {
              href += "?utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=" + Discourse.SiteSettings.affiliate_snapdeal_tag;
            }
          
        }
        return href;
      });
    }
    return text;
  });

})();
