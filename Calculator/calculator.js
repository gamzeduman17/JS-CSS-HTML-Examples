
var buttons_=document.getElementsByTagName("button"),
length_=buttons_.length,
i=0,
result_=document.getElementById("result");
for(i=0;i<length_;i++)
{
    buttons_[i].onclick=Calculation;
}
function Calculation()
{ var value_=this.innerHTML
    if(value_=="=")
    {
        try
        {
            result_.value=eval(result_.value);
        }
        catch(e)
        {
            result_.value="0";
        }
        return;
    }

    result_.value+=value_;
}