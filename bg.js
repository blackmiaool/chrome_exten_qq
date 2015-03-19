chrome.tabs.query({
  
      active : true,
  
      currentWindow : true
  
  }, function(tabs) {
  
      chrome.tabs.sendMessage(tabs[0].id, {ready : "ready"}, function(response) {
  
          if (response.download === "download") {
  
          }
  
      });
  
  });