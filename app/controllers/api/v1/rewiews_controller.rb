module Api
  module V1
    class RewiewsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        rewiew = Rewiew.new(rewiew_params)
        if rewiew.save
          render json: RewiewSerializer.new(rewiew).serialized_json
        else
          render json: { error: rewiew.errors.messages }, status: 422
        end
      end

      def destroy 
        rewiew = Rewiew.find(params[:id])
        if rewiew.destroy 
          head :no_content
        else
          render json: { error: rewiew.errors.messages }, status: 422
        end
      end

      private

      def rewiew_params
        params.require(:rewiew).permit(:title, :description, :score, :dish_id)
      end
    end
  end
end
