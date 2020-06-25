Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :dishes, param: :slug
      resources :rewiews, only: [:create, :destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
