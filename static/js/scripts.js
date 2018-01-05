var TSOS = TSOS || {};

(function(window, $, APP) {
  // LatestReleaseComponent
  // ---------------------------------------------
  function LatestReleaseComponent () {
    this.$el = $('.project-header__item_latest-release').first();
    this.githubEndpoinUrl = this.$el
        .data('releases-url')
        .replace('{/id}', '/latest');
  }

  LatestReleaseComponent.prototype.run = function() {
    var self = this;

    this.fetch(function(err, data) {
      if (err) { return; }
        self.render(data.url, data.tag);
      });
    };

  LatestReleaseComponent.prototype.fetch = function(callback) {
    $.ajax(this.githubEndpoinUrl)
      .then(function(response) {
        callback(null, {
          url: response.html_url,
          tag: response.tag_name
        });
      });
  };

  LatestReleaseComponent.prototype.render = function(latestReleaseUrl, latestReleaseTag) {
    this.$el
      .empty()
      .append(
        $('<a>', {
          target: '_blank',
          href: latestReleaseUrl,
          text: latestReleaseTag,
        })
      );
  };

  // SubPagesComponent
  // ---------------------------------------------
  function PagesComponent ($el) {
    this.$el = $el;
    this.$navEl = $el.filter('.pages-navigation');
    this.$contentEl = $el.filter('.pages-wrapper');
  }

  PagesComponent.prototype.init = function() {
    $(window).bind('popstate', this.onPopStateHandler.bind(this));
    this.$navEl.find('a').on('click', this.onClickHandler.bind(this));
  };

  PagesComponent.prototype.onClickHandler = function(event) {
    var $clickedEl = $(event.target);
    var content_id = $clickedEl.data('content-id');

    this._changeComponentState($clickedEl, content_id);

    var state = {
      content_id: content_id
    };

    history.pushState(state, '', $clickedEl.data('url'));
    return false;
  };

  PagesComponent.prototype.onPopStateHandler = function(event) {
    var state = event.originalEvent.state;
    if (state === null) { return; }
    var content_id = state.content_id;
    var $clickedEl = $('a[data-content-id="' + content_id + '"]');

    this._changeComponentState($clickedEl, content_id);
  };

  PagesComponent.prototype._changeComponentState = function($clickedEl, content_id) {
    var $clickedLiEl = $clickedEl.parents('li');

    this.$navEl.find('li').removeClass('active');
    $clickedLiEl.addClass('active');


    this.$contentEl.find('.pages__item').removeClass('pages__item_active');
    $('#' + content_id).addClass('pages__item_active');
  };

  // Helpers
  // ---------------------------------------------
  APP.helpers = {

    initLatestReleaseComponent: function() {
      new LatestReleaseComponent().run();
    },

    initPagesComponent: function() {
      new PagesComponent($('.pages-wrapper, .pages-navigation')).init();
    }

  };

  // Document Ready
  // -----------------------------
  $(function() {
    APP.helpers.initLatestReleaseComponent();
    APP.helpers.initPagesComponent();
  });

}(window, jQuery, TSOS, undefined));
