(ns cv.core
    (:require [reagent.core :as reagent]))

;; -------------------------
;; Views

(defn cover-pic []
  [:div.uk-cover.uk-height-viewport
   [:img.uk-cover-object {:src "https://newevolutiondesigns.com/images/freebies/cool-facebook-cover-1.jpg"}]])

(defn progress-bar [name width]
  [:li
   [:div.uk-panel.uk-panel-box
    [:p name]
    [:div.uk-progress
     [:div.uk-progress-bar {:style {:width width}}]]]])

(defn experience []
  [:h2 "Experience Page"])

(defn skills []
  [:ul.uk-grid.uk-grid-small.uk-grid-width-1-1.uk-grid-width-medium-1-2.uk-grid-width-large-1-3 {:data-uk-grid-margin ""}
   [progress-bar "C#" "80%"]
   [progress-bar "Python" "70%"]
   [progress-bar "Java" "60%"]
   [progress-bar "SQL" "50%"]
   [progress-bar "Golang" "40%"]
   [progress-bar "PHP" "40%"]
   [progress-bar "Clojure/ClojureScript" "30%"]
   [progress-bar "C" "30%"]
   [progress-bar "Javascript" "30%"]
   ])


(defn education []
  [:h2 "Education Page"])

(defn contact []
  [:h2 "Contact Page"])


(defn nav-bar []
  [:nav.uk-navbar.uk-margin-bottom
   [:a.uk-navbar-brand {:href "#"} "Pic"]
   [:ul.uk-navbar-nav.uk-float-right
    [:li [:a {:href "#"} "Experience"]]
    [:li.uk-active [:a {:href "#"} "Skills"]]
    [:li [:a {:href "#"} "Education"]]
    [:li [:a {:href "#"} "Contact"]]]])

(defn home-page []
  [:div.uk-container.uk-container-center.uk-width-large-1-1
   [nav-bar]
   [skills]
   [:script {:src "jquery-3.1.1.min.js" :type "text/javascript"}]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
