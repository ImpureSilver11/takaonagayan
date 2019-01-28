Rails.application.routes.draw do
  get '/' => 'tops#index'

  devise_for :user, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'   
  } 

  devise_scope :devise do
    get "sign_in", :to => "sessions#new"
    get "sign_out", :to => "sessions#destroy" 
  end
  resources :tops, :sessions, :devise, :sessions, :home
end
