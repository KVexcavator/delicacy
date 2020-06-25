Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :vl do
      resources :dishes, param: :slug
      resources :rewiews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
