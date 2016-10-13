(ns cv.core
    (:require [reagent.core :as reagent]))

;; -------------------------
;; Views

(defn cover-pic []
  [:div.uk-cover.uk-height-viewport
   [:img.uk-cover-object {:src "https://newevolutiondesigns.com/images/freebies/cool-facebook-cover-1.jpg"}]])


(defn nav-bar []
  [:nav.uk-navbar
   [:ul.uk-navbar-nav.uk-float-right
    [:li.uk-active [:a {:href "#"} "Home"]]
    [:li [:a {:href "#"} "Test"]]
    [:li [:a {:href "#"} "Thing"]]]])

(defn home-page []
  [:div.uk-container.uk-container-center.uk-width-large-1-1
    [nav-bar]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
