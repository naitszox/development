;(function($){'use strict';$.plugin('swAutoSubmit',{defaults:{'loadingindicator':true},init:function(){var me=this;me.applyDataAttributes();me.$form=$(me.$el.parents('form')[0]);me._on(me.$el,'change',$.proxy(me.onChangeSelection,me));$.publish('plugin/swAutoSubmit/onRegisterEvents',[me]);},onChangeSelection:function(){var me=this;if(me.opts.loadingindicator){$.loadingIndicator.open({closeOnClick:false});}
me.$form.submit();}});})(jQuery);