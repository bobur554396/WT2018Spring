from rest_framework import serializers

from api.models import Todo


class TodoSerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  title = serializers.CharField(required=True)

  def create(self, validated_data):
    return Todo.objects.create(**validated_data)
  
  def update(self, instance, validated_data ):
    instance.title = validated_data.get('title', instance.title)
    instance.save()
    return instance

class TodoSerializer2(serializers.ModelSerializer):
  
  class Meta:
    model = Todo
    fields = "__all__"
    # fields = ('id', 'title', 'created_at')
  

    

    
  