varying vec2 vUv;

uniform sampler2D uTexture1;
uniform sampler2D uTexture2;
uniform sampler2D uDisp;

uniform float uDispPower;
uniform float uIntensity;

uniform vec2 uImageAspect1;
uniform vec2 uImageAspect2;
uniform vec2 uPlaneAspect;

/*
 * ウィンドウのサイズに合わせたテクスチャ座標に変換する
 * background-size: cover と同じ効果
 */
vec2 getConvUv(vec2 windowRes, vec2 imageRes){

    vec2 ratio = vec2(
        min((windowRes.x / windowRes.y) / (imageRes.x / imageRes.y), 1.0),
        min((windowRes.y / windowRes.x) / (imageRes.y / imageRes.x), 1.0)
    );

    vec2 convUv = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    return convUv;
}

void main() {
    vec2 uv = vUv;

    vec2 convUv1 = getConvUv(uPlaneAspect, uImageAspect1);
    vec2 convUv2 = getConvUv(uPlaneAspect, uImageAspect2);

    vec4 uDisp = texture2D(uDisp, uv);
    vec2 dispVec = vec2(uDisp.x, uDisp.y);
    
    vec2 distPos1 = convUv1 + (dispVec * uIntensity * uDispPower);
    vec2 distPos2 = convUv2 + (dispVec * -(uIntensity * (1.0 - uDispPower)));
    
    vec4 _texture1 = texture2D(uTexture1, distPos1);
    vec4 _texture2 = texture2D(uTexture2, distPos2);

    gl_FragColor = mix(_texture1, _texture2, uDispPower);
}