Rottenpotatoes::Application.routes.draw do
  resources :movies do
  # Add new routes here
    get 'show_by_director', on: :member
  end

  root :to => redirect('/movies')
end
