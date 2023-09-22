import * as React from 'react'
import { SvgIcon, useTheme } from '@mui/material'

export default function PimoroniIcon(props: any) {
    // const { color } = props
    const theme = useTheme()
    let color1 = theme.palette.primary.main
    // color1 = "white"

    return (
        <SvgIcon {...props}>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="PimoroniIcon">
                <polygon id="Path" fill="none" points="0 0 24 0 24 24 0 24"></polygon>
                <g id="pimoroni_logo" transform="translate(1, 0.5)" fill={color1} fillRule="nonzero">
                    <path d="M7.26977724,11.0376248 C6.73852719,10.8879113 6.18682787,11.1983844 6.0375223,11.7310859 C5.88821674,12.2637874 6.1978439,12.816994 6.72909394,12.9667075 C7.25897044,13.1053173 7.80330666,12.7989878 7.96134889,12.2732464 C8.03468178,12.0173986 8.00282947,11.742762 7.87289934,11.5106176 C7.7429692,11.2784732 7.52577388,11.1081398 7.26977724,11.0376248 L7.26977724,11.0376248 Z" id="Path"></path>
                    <path d="M12.2649805,11.0359609 C11.733969,10.8901088 11.1849683,11.2010232 11.0370147,11.7313921 C10.889061,12.261761 11.1978564,12.8119098 11.7277062,12.961926 C12.2575561,13.1119422 12.8089813,12.8053473 12.961095,12.2761563 C13.0349096,12.0193614 13.0028481,11.7437082 12.8720644,11.5107045 C12.7412808,11.2777008 12.5226588,11.1067369 12.2649805,11.0359609 L12.2649805,11.0359609 Z" id="Path"></path>
                    <path d="M17.3912879,4.93936286 C17.1992084,4.94313822 17.0075012,4.95805487 16.8171107,4.98403933 C16.4968964,2.73904679 14.5976947,0.739774828 11.9807714,0.170149855 C9.36384812,-0.399475117 7.08922282,0.505223369 5.80836585,2.2252674 C5.37008569,2.0996763 4.91678496,2.03578353 4.46125766,2.03539241 C3.26347831,2.05011339 2.12054858,2.54557734 1.28394545,3.41276814 C0.447342316,4.27995893 -0.0143902523,5.44782653 0.000342017119,6.6594069 C0.0224257579,8.56932592 1.02723597,10.1888479 2.60622343,10.8478258 C3.15831695,12.6237154 -1.9319853,15.7845756 3.25769379,21.0563989 C3.27854684,21.0845233 3.31127366,21.1010753 3.34602875,21.1010753 C3.38078384,21.1010753 3.41351066,21.0845233 3.43436371,21.0563989 C3.48957307,20.9893842 3.56686616,20.4309283 3.75457796,20.2633915 C3.94228975,20.0958548 4.3729227,20.0511783 4.57167637,20.3304062 C5.24523046,21.3021194 6.76900858,22.5530605 7.64131634,22.9886561 C7.68386132,23.0067449 7.73240964,23.0030389 7.77178899,22.9786964 C7.81116834,22.9543539 7.83657542,22.9123441 7.84007001,22.8657958 C7.81798627,22.6312444 7.69652569,22.2850017 7.74069317,21.9722665 C7.78486066,21.6595312 8.27070295,21.3803033 8.65716842,21.6930385 C9.57364366,22.407862 11.4397198,22.977487 13.2174609,22.8881341 C13.3168377,22.8881341 13.4162146,22.7541047 13.3499633,22.6759208 C13.1070422,22.3631856 13.0297491,21.9834356 13.1843353,21.7488841 C13.3389215,21.5143327 13.548717,21.5255018 13.7474707,21.4696562 C14.4983179,21.2462738 16.0552216,19.7161048 16.1435566,18.5321784 C16.1450286,18.5032967 16.1602287,18.4769217 16.1843495,18.4613953 C16.2084702,18.4458688 16.2385284,18.4431112 16.2650171,18.4539946 C16.5079383,18.5321784 16.6625245,18.9342666 16.7950269,18.7890681 C17.214618,18.3311343 17.4575391,16.588752 17.3692042,15.8850976 C17.3656143,15.8464599 17.3870909,15.8098958 17.4223547,15.7946085 C17.4576186,15.7793213 17.4986058,15.7888066 17.5237904,15.8180829 C17.722544,16.0638035 17.9654652,16.1754947 18.0317164,16.0749726 C18.4292237,15.5276859 18.5286006,14.678833 18.5286006,13.9305021 C20.773473,13.3950057 22.2559337,11.2309744 21.9632091,8.9168107 C21.6704845,6.60264701 19.697132,4.88588371 17.3912879,4.93936286 Z M8.8117546,4.06817173 C9.03259201,3.19698059 10.0705278,2.71670856 11.1305474,2.99593648 C12.1905669,3.27516441 12.8530792,4.20220113 12.6322418,5.07339227 C12.4886974,5.65418636 11.9697295,6.06744369 11.3403429,6.19030398 L11.2188824,6.63706866 C11.1084636,7.03915688 10.821375,7.08383335 10.4680352,7.00564953 C10.4896287,6.99046613 10.5021085,6.96521873 10.5011608,6.93863483 L10.6336632,6.31316427 C10.6420297,6.23758878 10.5954296,6.16688311 10.5232445,6.14562751 C10.4473361,6.13180122 10.3741947,6.18112411 10.3576165,6.25731868 L10.2361559,6.88278924 C10.2243212,6.90352366 10.2243212,6.92906952 10.2361559,6.94980394 L10.059486,6.89395836 L9.75031359,6.7934363 L9.75031359,6.7934363 L9.93802539,6.17913486 C9.94833903,6.14506907 9.9448197,6.10825142 9.92824485,6.07681543 C9.91167,6.04537945 9.88340372,6.02191226 9.84969042,6.0115981 C9.81463898,5.99754269 9.77532772,5.99925812 9.74160316,6.01631473 C9.7078786,6.03337133 9.68293513,6.06415349 9.6730205,6.10095104 L9.49635057,6.68174513 C9.26447129,6.53654661 9.13196885,6.34667162 9.23134568,6.00042899 L9.34176438,5.62067901 C8.8890477,5.20742167 8.66821029,4.62662758 8.8117546,4.06817173 Z M10.6778307,17.1695461 C10.5232445,17.538127 10.0815697,17.8061858 9.6730205,17.9737225 L9.6730205,17.6163108 C9.64388501,17.2964225 9.37198855,17.0557714 9.05467575,17.069024 C8.72341964,17.0578549 8.45841475,17.3035755 8.46945662,17.5939726 L8.49154036,18.1524284 C8.04656993,18.1134893 7.60854327,18.0158627 7.18859965,17.8620314 C5.84149146,17.348252 4.95814183,16.10848 5.36669104,15.1814433 C5.55440283,14.7458477 6.08441261,14.868708 6.45983621,15.0362447 L6.28316628,15.4718403 C6.17274758,15.7510682 6.33837563,16.0638035 6.647548,16.1754947 C6.94352229,16.2902113 7.2773238,16.1599755 7.42047893,15.8739285 L7.53089764,15.6058697 C7.79864936,15.7444257 8.08514018,15.8422777 8.38112166,15.8962667 C9.79448107,16.1419873 10.9538775,16.2871858 10.6778307,17.1695461 Z M12.7205767,16.3653697 C11.8813946,16.0973109 10.9870031,14.1203771 8.53570784,14.8798771 C6.60338052,12.6348846 4.79251377,13.7964727 3.26873566,13.7071198 C4.24042025,12.3668257 4.6710532,10.1888479 4.46125766,9.04959796 C5.21210485,8.70335533 7.75173504,7.84333331 9.82760668,10.099495 C11.7268084,9.86494351 13.6480938,9.70857587 15.1277045,11.5738184 C15.3485419,13.9863477 13.6591357,16.6669358 12.7205767,16.3653697 Z" id="Shape"></path>
                    <path d="M10.4486792,5.99700469 C10.7197794,6.02672231 10.9640769,5.83198134 10.9958508,5.56082855 C11.0130015,5.42882601 10.9765432,5.29545287 10.8946426,5.19058439 C10.812742,5.0857159 10.6922441,5.0181167 10.5601401,5.00292884 C10.2834566,4.97324649 10.0346436,5.17250952 10.0028357,5.44924861 C9.98869074,5.58121065 10.0278533,5.71335496 10.1115992,5.81624382 C10.1953451,5.91913269 10.3167178,5.98421942 10.4486792,5.99700469 L10.4486792,5.99700469 Z" id="Path"></path>
                    <path d="M11.44655,5.99716139 C11.5791586,6.01132086 11.7119504,5.97211812 11.8153434,5.88828635 C11.9187364,5.80445458 11.9841421,5.68295745 11.99699,5.5508608 C12.0268532,5.27948264 11.8311581,5.03493472 11.5586767,5.00312825 C11.380232,4.98319726 11.2046568,5.0595111 11.0980884,5.20332307 C10.99152,5.34713505 10.9701488,5.5365967 11.0420251,5.70033966 C11.1139013,5.86408261 11.2681054,5.97723042 11.44655,5.99716139 L11.44655,5.99716139 Z" id="Path"></path>
                </g>
            </g>
        </g>
        </SvgIcon>
    )
}

