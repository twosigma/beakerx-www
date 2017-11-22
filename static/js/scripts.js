var TSOS = TSOS || {};

(function(window, $, APP) {

  // LatestReleaseComponent
  // ---------------------------------------------
  function LatestReleaseComponent () {

    this.$el = $('.latestRelease').first();
    this.githubEndpoinUrl = this.$el.data('releases-url').replace('{/id}', '/latest');

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
  function SubPagesComponent ($el) {
    this.$el = $el;
    this.$navEl = $el.find('.mainNav');
    this.$contentEl = $el.find('.contentWrapper');
  }

  SubPagesComponent.prototype.init = function() {
    $(window).bind('popstate', this.onPopStateHandler.bind(this));
    this.$navEl.find('a').on('click', this.onClickHandler.bind(this));
  };

  SubPagesComponent.prototype.onClickHandler = function(event) {
    var $clickedEl = $(event.target);
    var content_id = $clickedEl.data('content-id');

    this._changeComponentState($clickedEl, content_id);

    var state = {
      content_id: content_id
    };

    history.pushState(state, '', $clickedEl.data('url'));
    return false;
  };

  SubPagesComponent.prototype.onPopStateHandler = function(event) {
    var state = event.originalEvent.state;
    var content_id = state.content_id;
    var $clickedEl = $('a[data-content-id="' + content_id + '"]');

    this._changeComponentState($clickedEl, content_id);
  };

  SubPagesComponent.prototype._changeComponentState = function($clickedEl, content_id) {
    var $clickedLiEl = $clickedEl.parents('li');

    this.$navEl.find('li').removeClass('active');
    $clickedLiEl.addClass('active');

    this.$contentEl.removeClass('overview subpage').addClass($clickedEl.data('wrapper-class'));

    this.$contentEl.find('.pageSection').removeClass('active');
    $('#' + content_id).addClass('active');
  };

  // Helpers
  // ---------------------------------------------
  APP.helpers = {

    initLatestReleaseComponent : function() {
      new LatestReleaseComponent().run();
    },

    initSubPagesComponent: function() {
      new SubPagesComponent($('#subPagesWrapper')).init();
    }

  };

  // Document Ready
  // -----------------------------
  $(function() {
    APP.helpers.initLatestReleaseComponent();
    APP.helpers.initSubPagesComponent();
  });
}(window, jQuery, TSOS, undefined));
